import Level from '@/models/Level'

export const getAllLevels = async () => {
  return Level.find({})
}

export const createLevel = async (data: any) => {
  return Level.create(data)
}

export const updateLevel = async (data: any) => {
  return Level.findOneAndUpdate({ _id: data._id }, data)
}

export const deleteLevel = async (data: any) => {
  return Level.findOneAndDelete({ _id: data._id })
}
