import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

interface Locale {
  name: string
  value: string
}
let locales = ['es-AR']
async function getLocale(request: NextRequest) {
  let defaultLocale
  const cookieStore = cookies()
  const acceptLanguage = request.headers.get('accept-language')?.split(',')[0]
  const validLocale = locales.find((locale) => locale === acceptLanguage)

  if (validLocale) {
    defaultLocale = { value: acceptLanguage }
  } else {
    defaultLocale = { value: 'es-AR' }
  }
  const selectedLocale =
    (await cookieStore.get('preferredLocale')) || defaultLocale
  return selectedLocale
}

export async function middleware(request: NextRequest) {
  const locale = await getLocale(request)
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )
  const logedIn =
    (await request.cookies.get('next-auth.session-token')) ||
    (await request.cookies.get('__Secure-next-auth.session-token'))

  if (logedIn && pathnameHasLocale) {
    return
  }
  if (logedIn) {
    request.nextUrl.pathname = `/${locale.value}/home`
    return NextResponse.redirect(new URL(request.nextUrl))
  } else {
    if (pathnameHasLocale) return
  }

  // Redirect if there is no locale
  if (!pathnameHasLocale && !logedIn) {
    request.nextUrl.pathname = `/${locale.value}/`
    return NextResponse.redirect(request.nextUrl)
  } else {
    request.nextUrl.pathname = `/${locale.value}`
    return NextResponse.redirect(request.nextUrl)
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    //'/((?!_next).*)',
    //add api routes here
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    // Optional: only run on root (/) URL
  ],
}
