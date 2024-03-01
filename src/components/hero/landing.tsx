'use client'

import { BackgroundBeams } from '@/ui/aceternity/bgBeams'
import { TextGenerate } from '@/ui/aceternity/textGenerate'
import { BorderButton } from '@/components/buttons/borderButton'
import Link from 'next/link'

export default function LandingHero({
  dict,
  lang,
}: {
  dict: any
  lang: string
}) {
  return (
    <main>
      <div className="flex flex-col justify-center items-center w-full h-full max-w-4xl mx-auto p-4 space-y-5">
        <h1 className="relative z-10 text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-fuchsia-800 to-teal-700  text-center font-mono font-bold p-1 md:blur-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 cursor-default hover:blur-[2px]">
          {dict.home.title}
        </h1>
        <TextGenerate className="text-xl" words={dict.home.description} />
        <div>
          <Link href={`/${lang}/home`}>
            <BorderButton className="text-teal-500 text-lg font-bold z-10">
              {dict.home.button_label}
            </BorderButton>
          </Link>
        </div>
      </div>
      <BackgroundBeams />
    </main>
  )
}
