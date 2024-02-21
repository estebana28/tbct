import { Input } from '@chakra-ui/react'

interface TextfieldProps {
  placeholder?: string
}
export default function Textfield({ placeholder }: TextfieldProps) {
  return <Input placeholder={placeholder} />
}
