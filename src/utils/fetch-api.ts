import { getSavedAuthToken, clearSavedAuthToken } from './api-hooks/(auth)/auth'

export const baseUrl = 'http://localhost:3000/api'

export const fetchApi = async (input: any, options: any = {}) => {
  const headers = options.headers || {}
  const savedToken = getSavedAuthToken()
  const url = baseUrl + input
  const completeOptions = {
    ...options,
    headers: {
      Accept: 'application/json',
      Authorization: savedToken ? 'bearer ' + savedToken : null,
      'Content-Type': 'application/json',
      ...headers,
    },
  }
  const res = await fetch(url, completeOptions)
  if (res.status >= 200 && res.status < 300) {
    const json = await res.json()
    return json
  } else if (res.status === 401) {
    clearSavedAuthToken()
    throw res
  } else {
    const json = await res.json()
    return json
  }
}

export const postApi = (input: any, options: any = {}) =>
  fetchApi(input, {
    ...options,
    method: 'POST',
    body: JSON.stringify(options.body),
  })
export const patchApi = (input: any, options: any = {}) =>
  fetchApi(input, {
    ...options,
    method: 'PATCH',
    body: JSON.stringify(options.body),
  })

export const delApi = (input: any, options: any = {}) =>
  fetchApi(input, {
    ...options,
    method: 'DELETE',
    body: JSON.stringify(options.body),
  })

export const putApi = (input: any, options: any = {}) =>
  fetchApi(input, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(options.body),
  })
