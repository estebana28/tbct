// app/providers.tsx
'use client'

import { ChakraProvider as Chakra } from '@chakra-ui/react'
import theme from '@/styles/theme'

export async function ChakraProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <Chakra theme={theme}>{children}</Chakra>
}
