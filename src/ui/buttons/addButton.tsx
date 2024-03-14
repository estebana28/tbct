import { IconButton } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'

export default function AddButton({ onClick, ...props }: any) {
  return (
    <IconButton
      icon={<FaPlus />}
      aria-label="add"
      isRound
      onClick={onClick}
      {...props}
    />
  )
}
