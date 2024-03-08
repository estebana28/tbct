'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { auth, sendEmailCode } from '@/utils/api-hooks/(auth)/auth'
import InputCUI from '@/ui/inputs/input'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  FormControl,
  FormHelperText,
} from '@chakra-ui/react'

interface CardProps {
  dict: any
  lang: string
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
})

type AuthFormInputs = {
  email: string
}

export default function AuthCard({ dict, lang }: CardProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()

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
    setError('')
    setIsLoading(!isLoading)
    try {
      const authResponse = await auth(values.email)
      await sendEmailCode(values.email, lang, authResponse.authData)
      router.push(
        `/${lang}/auth/login?email=${encodeURIComponent(values.email)}`,
      )

      setIsLoading(false)
    } catch (error) {
      setError(dict.auth.code.code_send_error)
      setIsLoading(false)
    }
    setIsLoading(false)
  }

  return (
    <div className="shadow-2xl shadow-teal-500 rounded-xl w-[80%] md:w-[400px]">
      <Card borderRadius="1rem">
        <CardHeader className="rounded-t-xl bg-slate-950 ">
          <h1 className="text-3xl font-bold text-slate-300">
            {dict.auth.code.title}
          </h1>
        </CardHeader>
        <Divider color={'teal.500'} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody className="space-y-4 grid justify-items-start md:w-[400px] bg-slate-950">
            <FormControl isInvalid={!!errors.email}>
              <FormHelperText color={'white'} className="pb-2">
                {dict.auth.code.email_label}
              </FormHelperText>
              <InputCUI
                id="email"
                name="email"
                type="email"
                control={control}
                placeholder={dict.auth.code.email_placeholder}
                focusBorderColor="teal.500"
                className={`text-slate-300 ${errors.email ? 'mb-0' : 'mb-6'}`}
              />
              <div className="flex flex-col items-center justify-self-center">
                <Button
                  type="submit"
                  isLoading={isLoading}
                  disabled={isLoading}
                  loadingText={dict.auth.code.button_label_loading}
                  colorScheme="teal"
                  className="text-lg font-bold w-32 md:w-36"
                >
                  {dict.auth.code.button_label_code}
                </Button>
              </div>
              <span
                className={`text-red-500 h-6 mt-1 ${isLoading ? 'visible' : ''}`}
              >
                {error}
              </span>
            </FormControl>
          </CardBody>
        </form>
        <CardFooter className="bg-slate-950 rounded-b-xl"></CardFooter>
      </Card>
    </div>
  )
}
