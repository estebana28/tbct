import { redirect } from 'next/navigation'
import { getCookies } from 'next-client-cookies/server'

interface PageProps {
  params: {
    lang: string
  }
}
export default async function HomePage({ params: { lang } }: PageProps) {
  const cookies = getCookies()
  const isLogedin =
    cookies.get('next-auth.session-token') ||
    cookies.get('__Secure-next-auth.session-token')

  if (!isLogedin) {
    redirect(`/${lang}/auth/code`)
  }

  return (
    <div className="flex justify-center items-center h-full bg-slate-300">
      <h1 className="text-3xl text-slate-700 font-bold text-center">
        Hola persona que programa... Esta web app esta en construccion
      </h1>
    </div>
  )
}
