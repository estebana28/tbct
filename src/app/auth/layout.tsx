export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="w-screen h-screen bg-white-500 ">{children}</div>
}
