import { NextResponse } from 'next/server'
import { connectDB } from '@/utils/db'
import {
  createQuestion,
  deleteQuestion,
  getAllQuestions,
  updateQuestion,
} from '@/controllers/Question'

export const GET = async () => {
  await connectDB()

  try {
    const questions = await getAllQuestions()
    return NextResponse.json({ questions }, { status: 200 })
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
  const { topic, idTag, levels, question, answer, choices } =
    await request.json()
  await connectDB()

  try {
    await createQuestion({ topic, idTag, levels, question, answer, choices })
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
    const response = await updateQuestion({
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
    const response = await deleteQuestion({ _id })
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
