'use client'

import { useEffect, useState, useMemo } from 'react'
import { useCookies } from 'next-client-cookies'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { CircleFlag } from 'react-circle-flags'

interface Dictionary {
  dictionary: string
  countryCode: string
  title: string
}
export function LanguageMenu() {
  const [dictionary, setDictionary] = useState<Dictionary>({
    dictionary: 'es-AR',
    countryCode: 'ar',
    title: 'Argentina',
  })
  const cookies = useCookies()

  const langs = useMemo(
    () => [
      {
        dictionary: 'es-AR',
        countryCode: 'ar',
        title: 'Argentina',
      },
    ],
    [],
  )

  //Gets the language from cookies at the first render or set its value to default
  useEffect(() => {
    const lang = cookies.get('preferredLocale')
    if (lang) {
      const selected = langs.find((l) => l.dictionary === lang)
      selected && setDictionary(selected)
    } else {
      setDictionary(langs[0])
      cookies.set('preferredLocale', langs[0].dictionary)
    }
  }, [cookies, langs])

  // Memoize CircleFlag creation based on dictionary prop
  const selectedLanguage = useMemo(() => {
    if (langs.find((l) => l.dictionary === dictionary?.dictionary)) {
      return (
        <CircleFlag
          countryCode={dictionary?.countryCode}
          title={dictionary?.title}
          className="w-[20px] md:w-[30px] h-[20px] md:h-[30px]"
        />
      )
    }
  }, [dictionary, langs])

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        colorScheme="teal"
        variant="ghost"
        size="sm"
        py={0}
      >
        <div className="my-1">{selectedLanguage}</div>
      </MenuButton>

      <MenuList
        minW="30px"
        maxW="30px"
        bg="transparent"
        border="none"
        className="ml-3"
      >
        {langs.map((lang, index) => (
          <MenuItem bg={'transparent'} p={0} my={2} key={index}>
            <CircleFlag
              title={lang.title}
              countryCode={lang.countryCode}
              className="w-[20px] md:w-[30px] h-[20px] md:h-[30px]"
              onClick={() => {
                setDictionary(lang)
                cookies.set('preferredLocale', lang.dictionary)
              }}
            />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
