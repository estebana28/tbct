import { cookies } from 'next/headers'

export function saveCookie(cookieName: string, token: string) {
  cookies().set(cookieName, token)
}
export function getSavedCookie(cookieName: string) {
  return cookies().get(cookieName) || ''
}

export function clearSavedACookie(cookieName: string) {
  cookies().delete(cookieName)
}
