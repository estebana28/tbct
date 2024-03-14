import Topic from '@/models/Topic'

export const getAllTopics = async () => {
  return Topic.find({})
}

export const createTopic = async (data: any) => {
  return Topic.create(data)
}

export const updateTopic = async (data: any) => {
  return Topic.findOneAndUpdate({ _id: data._id }, data)
}

export const deleteTopic = async (data: any) => {
  return Topic.findOneAndDelete({ _id: data._id })
}
