import { redirect } from 'next/navigation'
import { getCookies } from 'next-client-cookies/server'
import SideDrawer from '@/components/drawers/sideDrawer'
import { getDictionary } from '@/dictionaries'

interface PageProps {
  params: {
    lang: string
  }
}
export default async function HomePage({ params: { lang } }: PageProps) {
  const dict = await getDictionary(lang)
  const cookies = getCookies()
  const isLogedin =
    cookies.get('next-auth.session-token') ||
    cookies.get('__Secure-next-auth.session-token')

  if (!isLogedin) {
    redirect(`/${lang}/auth/code`)
  }

  return (
    <div className="h-full bg-gradient-to-tr from-slate-400 to-slate-200">
      <div className="absolute top-[45%]">
        <SideDrawer dict={dict} />
      </div>
      <div className="flex justify-center items-center h-full bg-transparent container mx-auto">
        <h1 className="text-3xl text-slate-700 font-bold text-center">
          Bienvenid@ a la mejor app del condado, ahre que no.
        </h1>
      </div>
    </div>
  )
}
