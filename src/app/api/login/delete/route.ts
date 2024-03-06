import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/db'
import { deleteByEmail } from '@/controllers/Auth'

export const DELETE = async (request: Request) => {
  const { email } = await request.json()
  await connectDB()

  try {
    const res = await deleteByEmail(email)
    console.log(res)
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
