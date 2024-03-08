import { redirect } from 'next/navigation'
import { getCookies } from 'next-client-cookies/server'

interface PageProps {
  params: {
    lang: string
  }
}
export default async function HomePage({ params: { lang } }: PageProps) {
  const cookies = getCookies()
  const isLogedin = cookies.get(
    'next-auth.session-token' || '__Secure-next-auth.session-token',
  )

  if (!isLogedin) {
    redirect(`/${lang}/auth/code`)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl text-white font-bold">Hello Page</h1>
    </div>
  )
}
