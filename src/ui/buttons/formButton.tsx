import { Button } from '@chakra-ui/react'
import React from 'react'

interface IFormButton {
  children: React.ReactNode
  isLoading?: boolean
  loadingText?: string
  colorScheme?: string
  disabled?: boolean
  variant?: string
  type?: 'submit' | 'reset' | 'button'
  onClick?: Function | any
  className?: string
}

export default function FormButtonCUI({
  children,
  isLoading,
  disabled,
  loadingText,
  colorScheme,
  variant,
  type,
  onClick,
  className,
  ...props
}: IFormButton) {
  return (
    <Button
      variant={variant}
      type={type}
      isLoading={isLoading}
      disabled={isLoading}
      loadingText={loadingText}
      colorScheme={colorScheme}
      className={'text-lg font-bold w-32 md:w-36 ' + ' ' + className}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  )
}
