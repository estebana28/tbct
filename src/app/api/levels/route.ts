import { NextResponse } from 'next/server'
import {
  getAllLevels,
  createLevel,
  updateLevel,
  deleteLevel,
} from '@/controllers/Level'
import { connectDB } from '@/utils/db'

export const GET = async () => {
  await connectDB()

  try {
    const levels = await getAllLevels()
    return NextResponse.json({ levels }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 },
    )
  }
}

export const POST = async (request: Request) => {
  const { name, color, number } = await request.json()
  await connectDB()

  try {
    await createLevel({ name, color, number })
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
  const { _id, name, color, number } = await request.json()
  await connectDB()

  try {
    const response = await updateLevel({
      _id,
      name,
      color,
      number,
      updatedAt: new Date(),
    })
    if (response) {
      return NextResponse.json({ message: 'Success' }, { status: 200 })
    } else {
      return NextResponse.json(
        {
          error: 'Topic not found',
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

export const DELETE = async (request: Request) => {
  const { _id } = await request.json()
  await connectDB()

  try {
    const response = await deleteLevel({ _id })
    if (response) {
      return NextResponse.json({ message: 'Success' }, { status: 200 })
    } else {
      return NextResponse.json(
        {
          error: 'Topic not found',
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
