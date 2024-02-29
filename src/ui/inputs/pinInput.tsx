import { PinInput, PinInputField, HStack } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'

interface PinInputCUIProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  variant?: string
  colorScheme?: string
  onClick?: Function | any
  props?: any
  digits: number
  control: any
  name: string
  value?: string
  focusBorderColor?: string
  className?: string
}
export default function PinInputCUI({
  name,
  control,
  digits,
  value,
  focusBorderColor,
  className,
}: PinInputCUIProps) {
  const codes: JSX.Element[] = []
  for (let index = 0; index < digits; index++) {
    codes.push(<PinInputField key={index} />)
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <HStack spacing={{ base: 2, md: 6 }} className="text-slate-300">
          <PinInput
            value={value}
            onChange={onChange}
            errorBorderColor="crimson"
            focusBorderColor={focusBorderColor}
          >
            {codes}
          </PinInput>
        </HStack>
      )}
    />
  )
}
