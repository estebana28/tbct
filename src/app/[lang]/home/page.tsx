import { redirect } from 'next/navigation'
import { getCookies } from 'next-client-cookies/server'

interface PageProps {
  params: {
    lang: string
  }
}
export default async function HomePage({ params: { lang } }: PageProps) {
  const cookies = getCookies()
  const isLogedin = cookies.get('auth_token')

  if (!isLogedin) {
    redirect(`/${lang}/auth/code`)
  }

  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  )
}
