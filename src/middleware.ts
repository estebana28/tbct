import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
interface Locale {
  name: string
  value: string
}
let locales = ['es-AR']

interface User {
  role: string
}

interface Session {
  user: User | null
}

const adminCheck = async (req: NextRequest) => {
  const session: Session | null = await getToken({ req })
  if (session) {
    return session.user?.role === 'admin'
  }
}
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

  // Checks if user is admin and block access to admin routes
  const isAdmin = await adminCheck(request)
  if (pathname.startsWith('/admin') && isAdmin) {
    return
  }

  // Checks if user is logged in
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
