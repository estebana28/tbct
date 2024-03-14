import { connectDB } from '@/utils/db'
import { NextResponse } from 'next/server'
import Auth from '@/models/Auth'

export const POST = async (request: Request) => {
  const { email } = await request.json()
  await connectDB()

  try {
    const res = await Auth.findOneAndUpdate({ email }, { role: 'admin' })
    if (res) {
      return NextResponse.json({ message: 'Success' }, { status: 200 })
    } else {
      return NextResponse.json(
        {
          error: 'Email not found',
        },
        { status: 500 },
      )
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
