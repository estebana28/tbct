'use client'

import React from 'react'
import NavBarMenu from '../menus/navBarMenu'
import { LanguageMenu } from '../menus/languages'
import Notifications from '../menus/notifications'

export default function Navbar({ dict }: { dict: any }) {
  return (
    <div className="h-16 border-b-2 border-slate-700 bg-slate-900 fixed w-full">
      <div className="flex flex-row justify-between items-center h-full">
        <h1 className="relative z-10 text-lg md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-fuchsia-800 to-teal-700  text-center font-mono font-bold md:blur-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 cursor-default px-3">
          {dict.home.navbar.title}
        </h1>
        <div className="text-white px-3 flex flex-row justify-center items-center space-x-4">
          <LanguageMenu className="shadow-lg shadow-teal-500" />
          <Notifications dict={dict} />
          <NavBarMenu dict={dict} />
        </div>
      </div>
    </div>
  )
}
