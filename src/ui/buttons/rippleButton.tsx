'use client'

import { Button, Stack, useColorModeValue } from '@chakra-ui/react'

export const RippleButton = ({
  className,
  children,
  type = 'button',
}: {
  className?: string
  children: React.ReactNode
  type?: 'submit' | 'reset' | 'button'
}) => {
  const scheme = 'teal'
  const step1 = useColorModeValue('900', '800')
  const step2 = useColorModeValue('800', '600')
  const step3 = useColorModeValue('600', '400')
  return (
    <Button
      // bgColor={`${scheme}.${step1}`}
      color="teal"
      fontWeight="medium"
      rounded="md"
      shadow="base"
      variant={'outline'}
      type={type}
      _focus={{
        outline: 'none',
      }}
      transition="background 0.8s"
      backgroundPosition="center"
      _hover={{
        bgColor: `${scheme}.${step2}`,
        bgGradient: `radial(circle, transparent 1%, ${scheme}.${step2} 1%)`,
        bgPos: 'center',
        backgroundSize: '15000%',
        color: 'teal.300',
      }}
      _active={{
        bgColor: `${scheme}.${step3}`,
        backgroundSize: '100%',
        transition: 'background 0s',
      }}
      className={`bg-slate-900 ${className}`}
    >
      {children}
    </Button>
  )
}
