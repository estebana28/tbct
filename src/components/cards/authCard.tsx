import Textfield from '@/ui/inputs/textfield'
import { BorderButton } from '@/components/buttons/borderButton'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export default function AuthCard() {
  return (
    <div className="shadow-2xl shadow-secondary-500 rounded-xl">
      <Card borderRadius="1rem">
        {/* <CardHeader></CardHeader> */}
        <CardBody className="space-y-5 flex flex-col justify-center items-center w-[400px] rounded-t-xl bg-slate-950">
          <Textfield placeholder="Email" />
          <BorderButton className="text-secondary-500 text-lg font-bold ">
            Send Code
          </BorderButton>
        </CardBody>
        <CardFooter className="bg-slate-950 rounded-b-xl"></CardFooter>
      </Card>
    </div>
  )
}
