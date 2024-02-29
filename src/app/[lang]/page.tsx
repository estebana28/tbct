import { getDictionary } from '../../dictionaries'
import LandingHero from '@/components/hero/landing'

interface PageProps {
  params: {
    lang: string
  }
}

export default async function Home({ params: { lang } }: PageProps) {
  const dict = await getDictionary(lang)

  return (
    <main>
      <LandingHero dict={dict} lang={lang} />
    </main>
  )
}
