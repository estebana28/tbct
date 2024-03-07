import AuthCard from '@/components/cards/authCard'
import { getDictionary } from '@/dictionaries'

interface PageProps {
  params: {
    lang: string
  }
}

export default async function CodePage({ params: { lang } }: PageProps) {
  const dict = await getDictionary(lang)
  return (
    <div className="flex items-start justify-center h-full pt-32 md:items-center md:pt-0 bg-slate-900">
      <AuthCard dict={dict} lang={lang} />
    </div>
  )
}
