'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { auth } from '@/utils/api-hooks/(auth)/auth'
import InputCUI from '@/ui/inputs/input'
import PinInputCUI from '@/ui/inputs/pinInput'
import { RippleButton } from '@/ui/buttons/rippleButton'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Divider,
} from '@chakra-ui/react'

interface CardProps {
  placeholderText?: string
  buttonTextLogin?: string
  title: string
  labelTextEmail?: string
  labelTextCode?: string
  lang: string
  placeholderTextEmail: string
  placeholderTextCode?: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
})

type AuthFormInputs = {
  email: string
}

export default function LoginCard({
  buttonTextLogin,
  placeholderTextEmail,
  title,
  labelTextEmail,
  labelTextCode,
  lang,
}: CardProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const { data: session, status } = useSession()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AuthFormInputs>({
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = async (values: any) => {
    console.log('Submitieando', values)

    setIsLoading(!isLoading)
    const res = await signIn('credentials', {
      redirect: false,
      email: values.email,
      code: values.code,
      //callbackUrl: `/${lang}/home`,
    })
    console.log(res)

    setIsLoading(!isLoading)
  }

  return (
    <div className="shadow-2xl shadow-teal-500 rounded-xl w-[80%] md:w-[400px]">
      <Card borderRadius="1rem">
        <CardHeader className="rounded-t-xl bg-slate-950 ">
          <h1 className="text-3xl font-bold text-slate-300">{title}</h1>
        </CardHeader>
        <Divider color={'teal.500'} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody className="space-y-4 grid justify-items-start md:w-[400px] bg-slate-950">
            <Text className="text-slate-300">{labelTextEmail}</Text>
            <InputCUI
              id="email"
              name="email"
              type="email"
              control={control}
              placeholder={placeholderTextEmail}
              focusBorderColor="teal.500"
              className="text-slate-300"
            />

            <Text className="text-slate-300">{labelTextCode}</Text>
            <PinInputCUI
              name="code"
              control={control}
              digits={6}
              focusBorderColor="teal.500"
            />

            <div className="justify-self-center">
              <RippleButton
                type="submit"
                className="text-lg font-bold text-teal-500"
              >
                {buttonTextLogin}
              </RippleButton>
            </div>
          </CardBody>
        </form>
        <CardFooter className="bg-slate-950 rounded-b-xl"></CardFooter>
      </Card>
    </div>
  )
}
