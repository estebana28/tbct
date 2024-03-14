import { fetchApi } from '../fetch-api'

export const getLevelsData = async () => {
  return await fetchApi('/levels')
}
