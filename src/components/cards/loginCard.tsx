'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import InputCUI from '@/ui/inputs/input'
import PinInputCUI from '@/ui/inputs/pinInput'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Divider,
  FormErrorMessage,
  FormControl,
  FormHelperText,
} from '@chakra-ui/react'
import { auth } from '@/utils/api-hooks/(auth)/auth'

interface CardProps {
  lang: string
  dict: any
}

type AuthFormInputs = {
  email: string
  code: string
}

export default function LoginCard({ dict, lang }: CardProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingResend, setIsLoadingResend] = useState<boolean>(false)

  const [error, setError] = useState<string>('')
  const { data: session, status } = useSession()
  const searchParams = useSearchParams()

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(dict.auth.login.email_error_valid)
      .required(dict.auth.login.email_error_required),
    code: yup
      .string()
      .min(6, dict.auth.login.code_error_valid)
      .required(dict.auth.login.code_error_required),
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm<AuthFormInputs>({
    defaultValues: {
      email: searchParams.get('email') || '',
      code: searchParams.get('code') || '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = async (values: any) => {
    setError('')
    setIsLoading(true)
    try {
      await signIn('credentials', {
        email: values.email,
        code: values.code,
        callbackUrl: `/${lang}/home`,
      })
      setIsLoading(false)
    } catch (error) {
      setError(dict.auth.login.signin_error)
      setIsLoading(false)
    }
    setIsLoading(false)
  }

  const resendCode = async () => {
    setIsLoadingResend(true)
    const email = getValues('email')
    await auth(email)
    setIsLoadingResend(false)
  }

  useEffect(() => {
    if (getValues('email') && getValues('code')) {
      onSubmit({
        email: getValues('email'),
        code: getValues('code'),
      })
    }
  }, [searchParams])

  return (
    <div className="shadow-2xl shadow-teal-500 rounded-xl w-[80%] md:w-[400px]">
      <Card borderRadius="1rem">
        <CardHeader className="rounded-t-xl bg-slate-950 ">
          <h1 className="text-3xl font-bold text-slate-300">
            {dict.auth.login.title}
          </h1>
        </CardHeader>
        <Divider color={'teal.500'} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody className="space-y-2 grid justify-items-start md:w-[400px] bg-slate-950">
            <FormControl isInvalid={!!errors.email}>
              <FormHelperText color={'white'} className="pb-2">
                {dict.auth.login.email_label}
              </FormHelperText>
              <InputCUI
                id="email"
                name="email"
                type="email"
                control={control}
                placeholder={dict.auth.login.email_placeholder}
                focusBorderColor="teal.500"
                className={`text-slate-300 ${errors.email ? 'mb-0' : 'mb-6'}`}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.code}>
              <FormHelperText color={'white'} className="pb-2">
                {dict.auth.login.code_label}
              </FormHelperText>
              <div className={`${errors.code ? 'mb-0' : 'mb-6'}`}>
                <PinInputCUI
                  name="code"
                  control={control}
                  digits={6}
                  focusBorderColor="teal.500"
                />
              </div>
              <FormErrorMessage>
                {errors.code && errors.code.message}
              </FormErrorMessage>
            </FormControl>
            <div className="flex flex-col items-center justify-self-center">
              <div className="space-x-4">
                <Button
                  type="submit"
                  isLoading={isLoading}
                  disabled={isLoading}
                  loadingText={dict.auth.login.button_label_loading}
                  colorScheme="teal"
                  className="text-lg font-bold w-32 md:w-36"
                >
                  {dict.auth.login.button_label_login}
                </Button>
                <Button
                  variant="outline"
                  colorScheme="teal"
                  className="text-lg font-bold w-32 md:w-36"
                  isLoading={isLoadingResend}
                  loadingText={dict.auth.login.button_label_resend_loading}
                  onClick={() => resendCode()}
                >
                  {dict.auth.login.button_label_resend}
                </Button>
              </div>
              <span
                className={`text-red-500 h-6 mt-1 ${isLoading ? 'visible' : ''}`}
              >
                {error}
              </span>
            </div>
          </CardBody>
        </form>
        <CardFooter className="bg-slate-950 rounded-b-xl"></CardFooter>
      </Card>
    </div>
  )
}
