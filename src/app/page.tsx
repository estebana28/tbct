import { Heading, VStack } from '@chakra-ui/react'
import { BackgroundBeamsDemo } from '@/ui/bg-beams'

export default function Home() {
  return (
    <main>
      <VStack justifyContent={'center'} h={'100dvh'}>
        <BackgroundBeamsDemo />
      </VStack>
    </main>
  )
}
