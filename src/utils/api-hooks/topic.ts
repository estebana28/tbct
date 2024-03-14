import { fetchApi } from '../fetch-api'

export const getTopicsData = async () => {
  return await fetchApi('/topics')
}
