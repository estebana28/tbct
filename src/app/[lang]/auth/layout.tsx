import { LanguageMenu } from '@/components/menus/languages'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-dvh h-dvh bg-white-500 ">
      <div className="flex justify-center md:justify-start">
        <h1 className="absolute p-4 text-xl md:text-2xl  bg-clip-text text-transparent bg-gradient-to-b from-fuchsia-800 to-teal-700 font-mono font-bold md:blur-[2px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 cursor-default hover:blur-none">
          The Big Code Theory
        </h1>
      </div>
      {children}
      <div className="absolute top-0 right-0 pt-3 md:p-4">
        <LanguageMenu />
      </div>
    </div>
  )
}
