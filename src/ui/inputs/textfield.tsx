import { Input } from '@chakra-ui/react'

interface TextfieldProps {
  placeholder?: string
  focusBorderColor?: string
}
export default function Textfield({
  placeholder,
  focusBorderColor,
}: TextfieldProps) {
  return (
    <Input
      fontSize={'sm'}
      color={'white'}
      borderColor={'white'}
      focusBorderColor={focusBorderColor}
      errorBorderColor="red.300"
      placeholder={placeholder}
    />
  )
}
