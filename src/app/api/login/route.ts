import connect from '@/utils/db'
import { NextResponse } from 'next/server'
import { Auth } from '@/models/Auth'

export const POST = async (request: Request) => {
  const { email, code } = await request.json()

  await connect()

  try {
    if (!code) {
      await Auth.getOrCreateAuthCode(email)
      return NextResponse.json({ message: 'Code sended.' }, { status: 200 })
    } else {
      await Auth.findByEmailAndCode(email, code)
      return NextResponse.json({ message: 'Success' }, { status: 200 })
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 },
    )
  }
}
