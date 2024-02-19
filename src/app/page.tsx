import { Heading, VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <main>
      <VStack justifyContent={'center'} h={'100vh'}>
        <Heading as="h1" size="4xl" color={'primary.500'}>
          The Big Code Theory
        </Heading>
      </VStack>
    </main>
  )
}
