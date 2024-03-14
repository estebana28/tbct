import { NextResponse } from 'next/server'
import {
  getAllTopics,
  createTopic,
  updateTopic,
  deleteTopic,
} from '@/controllers/Topic'
import { connectDB } from '@/utils/db'

export const GET = async () => {
  await connectDB()

  try {
    const topics = await getAllTopics()
    return NextResponse.json({ topics }, { status: 200 })
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
  const { name, idTag, description } = await request.json()
  await connectDB()

  try {
    await createTopic({ name, idTag, description })
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
  const { _id, name, idTag, description } = await request.json()
  await connectDB()

  try {
    const response = await updateTopic({
      _id,
      name,
      idTag,
      description,
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
    const response = await deleteTopic({ _id })
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
