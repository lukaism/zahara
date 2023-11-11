import type { NextAuthOptions } from 'next-auth'
import db from '@/utils/db'
import CredentialsProvider from 'next-auth/providers/credentials'

const getUser = async (name: string | undefined, password: string | undefined) => {
    // await new Promise((resolve) => setTimeout(() => resolve(), 2000))
    const user = await db.user.findFirst({
        where: {
            name: name,
            password: password
        },
    })

    return user
}

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = await getUser(credentials?.username, credentials?.password)
                //const user = { id: "42", name: "Dave", password: "nextauth", role: "puerta" }
                //const user = { id: "42", name: "Dave", password: "nextauth", role: "pagos" }
                //const user = { id: "42", name: "Dave", password: "nextauth", role: "turnos" }

                if (credentials?.username === user?.name && credentials?.password === user?.password) {
                    return user
                } else {
                    return null
                }

            }
        })

    ],
    callbacks: {
        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({ token, user }) {
            if (user) token.role = user.role
            return token
        },
        // If you want to use the role in client components
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role
            return session
        },
    }

}