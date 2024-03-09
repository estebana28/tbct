'use client'

import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FaBell } from 'react-icons/fa'

export default function Notifications({ dict }: { dict: any }) {
  return (
    <Menu>
      <MenuButton disabled className="shadow-lg shadow-teal-500 rounded-full">
        <FaBell size={25} />
      </MenuButton>
      <MenuList>
        <p className="text-slate-700 px-2">Notificacion 1</p>
        <p className="text-slate-700 px-2">Notificacion 2</p>
      </MenuList>
    </Menu>
  )
}
