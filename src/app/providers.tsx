// app/providers.tsx
'use client'

import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'
import { CookiesProvider } from 'next-client-cookies/server'
import theme from '@/styles/theme'

export async function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CookiesProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CookiesProvider>
    </SessionProvider>
  )
}
