import Textfield from '@/ui/inputs/textfield'
import { BorderButton } from '@/components/buttons/borderButton'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

interface CardProps {
  placeholderText?: string
  buttonText: string
  title: string
}

export default function AuthCard({
  buttonText,
  placeholderText,
  title,
}: CardProps) {
  return (
    <div className="shadow-2xl shadow-teal-500 rounded-xl w-[80%] md:w-[400px]">
      <Card borderRadius="1rem">
        <CardHeader className="rounded-t-xl bg-slate-950 text-center">
          <h1 className="text-3xl font-bold text-slate-300">{title}</h1>
        </CardHeader>
        <CardBody className="space-y-5 flex flex-col justify-center items-center md:w-[400px] bg-slate-950">
          <Textfield
            placeholder={placeholderText}
            focusBorderColor="teal.500"
          />
          <BorderButton className="text-teal-500 text-lg font-bold ">
            {buttonText}
          </BorderButton>
        </CardBody>
        <CardFooter className="bg-slate-950 rounded-b-xl"></CardFooter>
      </Card>
    </div>
  )
}
