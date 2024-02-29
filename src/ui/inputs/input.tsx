import { Input } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'

interface InputCUIProps {
  control: any
  name: any
  id: string
  type?: string
  placeholder?: string
  value?: string
  focusBorderColor?: string
  className?: string
}
export default function InputCUI({
  id,
  name,
  type,
  placeholder,
  value,
  control,
  focusBorderColor = 'teal.400',
  className,
  ...props
}: InputCUIProps) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Input
            w={'100%'}
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            focusBorderColor={focusBorderColor}
            errorBorderColor="red.300"
            fontSize={'sm'}
            className={className}
            {...props}
          />
        )}
      />
    </>
  )
}
