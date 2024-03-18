import { fetchApi, patchApi, delApi, postApi } from '@/utils/fetch-api'
import useSWR, { mutate } from 'swr'

export const fetchProfile = async () => {
  return await fetchApi('/profile')
}

export const refreshProfile = async () => {
  mutate('/profile', fetchProfile)
}

export const useProfileSWR = () => {
  const { data: myProfile, error } = useSWR(`/profile`, fetchProfile, {
    dedupingInterval: 1000,
    revalidateOnFocus: false,
  })
  return { myProfile, error }
}

export const updateProfile = async (data: any) => {
  return await patchApi(`/profile`, {
    body: {
      data,
    },
  })
}
