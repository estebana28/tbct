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
    <div className="flex justify-center items-start pt-32 md:items-center md:pt-0 h-full bg-slate-900">
      <AuthCard
        title={dict.auth.code.title}
        buttonTextCode={dict.auth.code.button_label_code}
        placeholderTextEmail={dict.auth.code.email_placeholder}
        labelTextEmail={dict.auth.code.email_label}
        lang={lang}
      />
    </div>
  )
}