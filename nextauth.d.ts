// nextauth.d.ts
import { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface User {
    email: string
    code: string
    createdAt: Date
    updatedAt: Date
    active: boolean
    role?: string
  }

  interface Session {
    email?: string
    user?: User
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    token: string
    exp?: number
    iat?: number
    jti?: string
    user: User
  }
}
