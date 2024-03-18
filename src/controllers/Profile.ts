import Profile from '../models/Profile'

export const getProfile = async (email: string) => {
  return Profile.findOne({ email })
}

export const createProfile = async ({
  authId,
  email,
}: {
  authId: string
  email: string
}) => {
  return await Profile.create({ authId, email })
}

export const updateProfileController = async (email: string, data: any) => {
  return Profile.findOneAndUpdate(
    { email },
    { $set: { 'preferences.topics': data.topics } },
    { new: true },
  )
}
