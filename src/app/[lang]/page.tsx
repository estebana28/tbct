import { Heading, VStack } from '@chakra-ui/react'
import { BackgroundBeamsDemo } from '@/ui/bg-beams'
import { getDictionary } from '../../dictionaries'

interface PageProps {
  params: {
    lang: string
  }
}

export default async function Home({ params: { lang } }: PageProps) {
  const dict = await getDictionary(lang)

  return (
    <main>
      <VStack justifyContent={'center'} h={'100dvh'}>
        <BackgroundBeamsDemo title={dict.home.title} />
      </VStack>
    </main>
  )
}
