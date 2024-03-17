'use client'

import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  Divider,
  TagLeftIcon,
  Icon,
  Tooltip,
  FormControl,
  FormHelperText,
} from '@chakra-ui/react'

import { TiChevronRight } from 'react-icons/ti'
import { useForm, Resolver } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormButtonCUI from '@/ui/buttons/formButton'
import { updateProfile, useProfileSWR } from '@/utils/api-hooks/profile'
import { getTopicsData } from '@/utils/api-hooks/topic'
import { IProfilePreferences, ITopic } from '@/types/topics'
import TopicsBlock from './side-drawer-components/topics-block'

const schema = yup.object().shape({
  topics: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required(),
        value: yup.string().required(),
        icon: yup.string().required(),
        color: yup.string().required(),
      }),
    )
    .required(),
})

const resolver: Resolver<IProfilePreferences, any> =
  yupResolver<IProfilePreferences>(schema)

export default function SideDrawer({ dict }: any) {
  const { myProfile } = useProfileSWR()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [topics, setTopics] = useState<ITopic[]>([])
  const btnRef = useRef<HTMLButtonElement>(null)
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<IProfilePreferences>({
    resolver: resolver,
    defaultValues: {
      topics: myProfile?.profile.preferences.topics || [],
    },
  })

  const onSubmit = async (values: any) => {
    setError('')
    setIsLoading(true)
    try {
      await updateProfile(values)
      setIsLoading(false)
      onClose()
    } catch (error) {
      setError('Alto error')
      setIsLoading(false)
    }
    setIsLoading(false)
  }

  const closeDrawer = () => {
    reset()
    onClose()
  }

  useMemo(
    () => setValue('topics', myProfile?.profile.preferences.topics),
    [myProfile, setValue],
  )
  useEffect(() => {
    const fetchTopics = async () => {
      const topics = await getTopicsData()
      setTopics(topics.topics)
    }
    fetchTopics()
  }, [])

  return (
    <div>
      <div className="pl-1">
        <Tooltip label={dict.home.side_drawer.input_topic_label}>
          <IconButton
            ref={btnRef}
            onClick={onOpen}
            isRound={true}
            variant="solid"
            aria-label="open"
            fontSize="20px"
            icon={<TiChevronRight />}
            bg={'#0E172A'}
            color={'teal.500'}
          />
        </Tooltip>
      </div>
      <Drawer
        size="md"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <DrawerContent bg={'gray.300'}>
            <DrawerCloseButton />
            <DrawerHeader
              fontSize={'2xl'}
              fontWeight={'bold'}
              color={'teal.500'}
            >
              {dict.home.side_drawer.header_title}
            </DrawerHeader>
            <Divider />
            <DrawerBody>
              <FormControl isInvalid={!!errors.topics}>
                <TopicsBlock
                  dict={dict}
                  control={control}
                  topics={topics}
                  errors={error}
                />
              </FormControl>
            </DrawerBody>
            <DrawerFooter className="space-x-2">
              <FormButtonCUI
                colorScheme={'teal'}
                variant="outline"
                type="button"
                onClick={closeDrawer}
                isLoading={isLoading}
              >
                {dict.home.side_drawer.button_label_cancel}
              </FormButtonCUI>
              <FormButtonCUI
                colorScheme={'teal'}
                isLoading={isSubmitting}
                type="submit"
              >
                {dict.home.side_drawer.button_label_save}
              </FormButtonCUI>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </div>
  )
}
