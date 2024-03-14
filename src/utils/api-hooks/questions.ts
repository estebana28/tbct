import { fetchApi } from '../fetch-api'

export const getQuestionsData = async () => {
  return await fetchApi('/question')
}
