import { NextResponse } from 'next/server'
import { sendEmail } from '@/utils/email'
import { render } from '@react-email/render'
import CodeEmail from '@/components/emails/codeEmail'
import { getDictionary } from '@/dictionaries'

export const POST = async (request: Request) => {
  const { email, lang, code } = await request.json()
  const dict = await getDictionary(lang)

  try {
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
    return NextResponse.json({ message: 'Email sended.' }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 },
    )
  }
}
