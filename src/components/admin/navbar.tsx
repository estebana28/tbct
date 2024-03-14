'use client'

import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { DiAtom } from 'react-icons/di'
import { signOut } from 'next-auth/react'

export default function AdminNavbar() {
  return (
    <div className="h-16 border-b-2 border-slate-700 bg-slate-900 fixed w-full">
      <div className="flex flex-row justify-between items-center h-full">
        <h1 className="relative z-10 text-lg md:text-3xl bg-clip-text text-slate-300 text-center font-mono font-bold px-3">
          Admin
        </h1>
        <div className="text-white px-3 flex flex-row justify-center items-center space-x-4">
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
              <MenuItem bg={'#0E172A'} onClick={() => signOut().then(() => {})}>
                SignOut
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  )
}
