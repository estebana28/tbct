import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectDB } from '@/utils/db'
import { findByEmailAndCode } from '@/controllers/Auth'

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        code: { label: 'Code', type: 'text' },
      },
      async authorize(credentials, req) {
        await connectDB()

        const authFound = await findByEmailAndCode(
          credentials!.email,
          credentials!.code,
        )
        if (!authFound) return null
        return authFound
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/code',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user
      return token
    },
    async session({ session, token }) {
      session.user = token.user as any
      return session
    },
  },
}

export default authOptions
