import { FC, useEffect, useMemo, useState } from 'react'
import ControlledSelect from '@/ui/selects/multiSelect'
import {
  FormErrorMessage,
  FormHelperText,
  Icon,
  TagLeftIcon,
} from '@chakra-ui/react'
import * as TBIcon from 'react-icons/tb'
import { IProfilePreferences, ITopic } from '@/types/topics'
import {
  GroupBase,
  OptionsOrGroups,
  SelectComponentsConfig,
  chakraComponents,
} from 'chakra-react-select'

const customComponents: SelectComponentsConfig<
  ITopic,
  true,
  GroupBase<ITopic>
> = {
  Option: ({ children, ...props }) => {
    const iconKey = props.data.icon as keyof typeof TBIcon
    const dynamicComponent = TBIcon[iconKey] as FC

    return (
      <chakraComponents.Option {...props}>
        <Icon
          as={dynamicComponent}
          boxSize={5}
          mr={2}
          h={5}
          w={5}
          color={props.data.color}
        />
        {children}
      </chakraComponents.Option>
    )
  },
  MultiValueContainer: ({ children, ...props }) => {
    const iconKey = props.data.icon as keyof typeof TBIcon
    const dynamicComponent = TBIcon[iconKey] as FC
    return (
      <chakraComponents.MultiValueContainer {...props}>
        <TagLeftIcon
          as={dynamicComponent}
          color={props.data.color}
          mr={2}
          h={5}
          w={5}
        />
        {children}
      </chakraComponents.MultiValueContainer>
    )
  },
}

export default function TopicsBlock({ dict, control, topics, errors }: any) {
  const adjustedTopics: OptionsOrGroups<ITopic, GroupBase<ITopic>> = topics &&
  topics.map((topic: ITopic) => ({
    label: topic.label,
    value: topic.value,
    icon: topic.icon,
    color: topic.color,
  }))

  return (
    <>
      <FormHelperText fontSize={'lg'} className="pb-2 font-bold">
        {dict.home.side_drawer.topics}
      </FormHelperText>

      <ControlledSelect
        name="topics"
        isMulti
        control={control}
        placeholder={dict.home.side_drawer.input_topic_label}
        closeMenuOnSelect={false}
        tagVariant="outline"
        options={adjustedTopics}
        components={customComponents}
      />
      <FormErrorMessage>
        {errors.topics && errors.topics.message}
      </FormErrorMessage>
    </>
  )
}
