import {
  generateSixDigitCode,
  cleanEmail,
  isCodeExpired,
} from '@/utils/auxiliary'
import Auth from '@/models/Auth'
import { createProfile } from './Profile'
import { sendEmailCode } from '@/utils/api-hooks/auth'
import Profile from '@/models/Profile'
import { sendEmail } from '@/utils/email'
import { render } from '@react-email/render'

import CodeEmail from '@/components/emails/codeEmail'
import { getDictionary } from '@/dictionaries'

export const getOrCreateAuthCode = async (email: string, lang: string) => {
  const dict = await getDictionary(lang)

  const code = generateSixDigitCode()
  const auth = await Auth.findOne({ email })
  if (!auth) {
    const authCreated = await Auth.create({
      email,
      code,
      createdAt: new Date(),
    })

    await sendEmail({
      to: email,
      subject: dict.auth.code.email_subject,
      html: render(
        await CodeEmail({
          title: dict.auth.code.email_title,
          body: dict.auth.code.email_body,
          code,
        }),
      ),
    })

    await Profile.create({
      authId: authCreated._id,
      email,
      createdAt: new Date(),
    })
  }

  if (auth.createdAt && isCodeExpired(auth.createdAt)) {
    await Auth.findOneAndUpdate(
      { email },
      {
        code,
        updatedAt: new Date(),
      },
    )
  }
}

export const findByEmailAndCode = async (email: string, code: string) => {
  const emailCleaned = cleanEmail(email)
  try {
    return await Auth.findOne({
      $and: [{ email: emailCleaned }, { code: code }],
    })
  } catch (error) {
    return error
  }
}

export const deleteByEmail = async (email: string) => {
  return Auth.findOneAndDelete({ email })
}
