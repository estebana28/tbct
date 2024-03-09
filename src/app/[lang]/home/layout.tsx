import Navbar from '@/components/dashboard/navbar'
import { getDictionary } from '@/dictionaries'

export const metadata = {
  title: 'TBCT - Dashboard',
  description: 'Info',
}
export default async function HomeLayout({
  params,
  children,
}: {
  params: { lang: string }
  children: React.ReactNode
}) {
  const dict = await getDictionary(params.lang)
  return (
    <div className="w-full h-full">
      <Navbar dict={dict} />
      {children}
    </div>
  )
}
