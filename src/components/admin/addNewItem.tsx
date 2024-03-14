'use client'
import AddButton from '@/ui/buttons/addButton'

interface AddNewItemProps {
  panel: string
  fields: string[]
}

export default function AddNewItem({ panel, fields }: AddNewItemProps) {
  const onClick = () => {
    console.log('panel', panel)
  }

  return (
    <div>
      <AddButton onClick={onClick} isDisabled />
    </div>
  )
}
