'use server'

import { redirect } from 'next/navigation'
import { fetchApi, postApi } from '../fetch-api'
import { cookies } from 'next/headers'

const TOKEN_ITEM_NAME =
  'next-auth.session-token' || '__Secure-next-auth.session-token'

export async function saveAuthToken(token: string) {
  cookies().set(TOKEN_ITEM_NAME, token)
}
export async function getSavedAuthToken() {
  return cookies().get(TOKEN_ITEM_NAME)
}

export async function clearSavedAuthToken() {
  cookies().delete(TOKEN_ITEM_NAME)
}

export const auth = (email: string, lang: string) => {
  return postApi('/login', {
    body: {
      email,
      lang,
    },
  })
}

export const sendEmailCode = (email: string, lang: string, code: string) => {
  return postApi('/send-email', {
    body: {
      email,
      lang,
      code,
    },
  })
}

export const login = (email: string, code: string) => {
  return postApi('/login', {
    body: {
      email,
      code,
    },
  })
}

export const signUp = (
  email: string,
  code: string,
  firstname: string,
  lastname: string,
) => {
  return postApi('/user/auth/signup', {
    body: {
      email,
      code,
      firstname,
      lastname,
    },
  })
}

export const logout = async () => {
  await clearSavedAuthToken()
  redirect('/')
}
