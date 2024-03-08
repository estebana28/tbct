import {
  generateSixDigitCode,
  cleanEmail,
  isCodeExpired,
} from '@/utils/auxiliary'
import Auth from '@/models/Auth'

export const getOrCreateAuthCode = async (email: string) => {
  const code = generateSixDigitCode()
  const auth = await Auth.findOne({ email })
  if (!auth) return Auth.create({ email, code, createdAt: new Date() })
  if (auth.createdAt && isCodeExpired(auth.createdAt)) {
    await Auth.findOneAndUpdate(
      { email },
      {
        code,
        updatedAt: new Date(),
      },
    )
    return code
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
