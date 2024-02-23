import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import path from 'path'

let locales = ['es-AR']

// Get the preferred locale, similar to the above or using a library
function getLocale() {
  const preferredLocale = 'es-AR' // Llamada a una función para obtener el idioma preferido
  return preferredLocale
}

export async function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )
  const locale = getLocale()

  const logedIn = request.cookies.get('auth_token')
  if (logedIn && pathnameHasLocale) {
    return
  }
  if (logedIn) {
    request.nextUrl.pathname = `/${locale}/`
    return NextResponse.redirect(new URL(request.nextUrl))
  } else {
    if (pathnameHasLocale) return
  }
  // Redirect if there is no locale

  if (!pathnameHasLocale && !logedIn) {
    request.nextUrl.pathname = `/${locale}/auth/code`

    return NextResponse.redirect(request.nextUrl)
  } else {
    request.nextUrl.pathname = `/${locale}`
    return NextResponse.redirect(request.nextUrl)
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    //'/((?!_next).*)',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    // Optional: only run on root (/) URL
  ],
}
