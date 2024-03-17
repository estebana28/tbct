import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/db'
import {
  getProfile,
  createProfile,
  updateProfileController,
} from '@/controllers/Profile'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export const GET = async () => {
  const session = await getServerSession(authOptions)
  await connectDB()
  try {
    const profile = await getProfile(session?.user?.email!)
    return NextResponse.json({ profile }, { status: 200 })
  } catch (error) {}
}

export const POST = async (request: Request) => {
  const { authId, email } = await request.json()
  console.log(authId, email)

  await connectDB()

  try {
    await createProfile({ authId, email })
    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 },
    )
  }
}

export const PATCH = async (request: Request) => {
  const session = await getServerSession(authOptions)
  await connectDB()
  const { data } = await request.json()

  try {
    await updateProfileController(session?.user?.email!, data)
    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 },
    )
  }
}
