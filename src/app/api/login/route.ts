import { connectDB } from '@/utils/db'
import { NextResponse } from 'next/server'
import { getOrCreateAuthCode, findByEmailAndCode } from '@/controllers/Auth'

export const POST = async (request: Request) => {
  const { email, code } = await request.json()

  await connectDB()

  try {
    if (!code) {
      try {
        await getOrCreateAuthCode(email)
        return NextResponse.json({ message: 'Code sended.' }, { status: 200 })
      } catch (error: any) {
        return NextResponse.json(
          {
            error: error.message,
          },
          { status: 500 },
        )
      }
    } else {
      try {
        const authDocument = await findByEmailAndCode(email, code)
        if (authDocument) {
          return NextResponse.json(
            { message: 'Login success' },
            { status: 201 },
          )
        } else {
          return NextResponse.json(
            {
              error: 'Invalid code',
            },
            { status: 400 },
          )
        }
      } catch (error: any) {
        return NextResponse.json(
          {
            error: error.message,
          },
          { status: 400 },
        )
      }
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 400 },
    )
  }
}
