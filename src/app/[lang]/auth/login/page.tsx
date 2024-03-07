import LoginCard from '@/components/cards/loginCard'
import { getDictionary } from '@/dictionaries'

interface PageProps {
  params: {
    lang: string
  }
}

export default async function LoginPage({ params: { lang } }: PageProps) {
  const dict = await getDictionary(lang)

  return (
    <div className="flex justify-center items-start pt-32 md:items-center md:pt-0 h-full bg-slate-900">
      <LoginCard dict={dict} lang={lang} />
    </div>
  )
}
