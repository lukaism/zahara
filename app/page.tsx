import { options } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'



export default async function Home() {

  const session = await getServerSession(options)
  return (
    <>
      {session ? (
        <main  className="flex min-h-screen flex-col items-center justify-between p-24">You're inside!</main>
      ) : (
        <main>Stay out!</main>
      )}
    </>
  )
}
