import Question from '@/models/Question'

export const getAllQuestions = async () => {
  return Question.find({})
}

export const createQuestion = async (data: any) => {
  return Question.create(data)
}

export const updateQuestion = async (data: any) => {
  return Question.findOneAndUpdate({ _id: data._id }, data)
}

export const deleteQuestion = async (data: any) => {
  return Question.findOneAndDelete({ _id: data._id })
}
