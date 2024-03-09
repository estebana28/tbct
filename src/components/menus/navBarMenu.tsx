'use client'

import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Avatar } from '@chakra-ui/react'
import { DiAtom } from 'react-icons/di'
import { signOut } from 'next-auth/react'

export default function NavBarMenu({ dict }: { dict: any }) {
  return (
    <Menu>
      <MenuButton>
        <Avatar
          size="sm"
          icon={<DiAtom size={35} color={'#0E172A'} />}
          bg={'#E2E8F0'}
          _hover={{ cursor: 'pointer' }}
          className="shadow-lg shadow-teal-500"
        />
      </MenuButton>
      <MenuList className="bg-slate-900" bg={'#0E172A'}>
        <MenuItem bg={'#0E172A'}>{dict.home.navbar.menu_profile}</MenuItem>
        <MenuItem bg={'#0E172A'}>{dict.home.navbar.menu_settings}</MenuItem>
        <MenuItem bg={'#0E172A'} onClick={() => signOut()}>
          {dict.home.navbar.menu_logout}
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
