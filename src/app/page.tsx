import { Heading, VStack } from '@chakra-ui/react'
import { LampDemo } from '@/ui/lamp'

export default function Home() {
  return (
    <main>
      <VStack justifyContent={'center'} h={'40%'}>
        <LampDemo />
      </VStack>
    </main>
  )
}
