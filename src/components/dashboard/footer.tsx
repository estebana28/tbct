'use client'

import Link from 'next/link'
import Image from 'next/image'
import { IoLogoDiscord, IoLogoGithub } from 'react-icons/io5'
import { Tooltip } from '@chakra-ui/react'

export default function Footer({ dict }: { dict: any }) {
  return (
    <div className="h-16 px-3 border-b-2 border-slate-700 bg-slate-900 fixed w-full bottom-0">
      <div className="flex flex-row justify-between items-center h-full">
        <div className="text-slate-400 text-xs md:text-base">
          {dict.home.footer.copyright}
        </div>
        <div className="flex flex-row justify-center items-center space-x-3">
          <Tooltip
            label={dict.home.footer.cafecito_tooltip}
            aria-label="A tooltip"
            placement="top-start"
          >
            <Link
              href={'https://cafecito.app/thebigcodetheory'}
              target="_blank"
            >
              <Image
                src={'https://cdn.cafecito.app/imgs/cafecito_logo.svg'}
                width={30}
                height={30}
                alt="Invitame un café en cafecito.app"
              />
            </Link>
          </Tooltip>
          <Tooltip
            label={dict.home.footer.github_tooltip}
            aria-label="A tooltip"
            placement="top-start"
          >
            <Link href={'https://github.com/estebana28/tbct'} target="_blank">
              <IoLogoGithub className="text-slate-400 text-2xl md:text-3xl" />
            </Link>
          </Tooltip>
          <Tooltip
            label={dict.home.footer.discord_tooltip}
            aria-label="A tooltip"
            placement="top-start"
          >
            <Link href={'https://discord.gg/EgMwKjMKxM'} target="_blank">
              <IoLogoDiscord className="text-slate-400 text-2xl md:text-3xl" />
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
