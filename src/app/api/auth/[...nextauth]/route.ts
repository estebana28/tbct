import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectDB } from '@/utils/db'
import { findByEmailAndCode } from '@/controllers/Auth'

const handler = NextAuth({
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
})

export { handler as GET, handler as POST }
