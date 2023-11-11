'use server'
import db from '@/utils/db'
import { revalidatePath } from 'next/cache'

export const newUser = async (data: FormData) => {
  const newUserName = data.get('name') as string
  const newUserEmail = data.get('email') as string
  const newUserPWD = data.get('password') as string
  const newUserRole = data.get('role') as string

  if (newUserName && newUserEmail && newUserPWD && newUserRole) {
    await db.user.create({
      data: {
        name: newUserName,
        email: newUserEmail,
        password: newUserPWD,
        role: newUserRole,
      },
    })
    revalidatePath('/users')
  }
}

export const completeTodo = async (id: string) => {
  await db.user.update({
    where: { id },
    data: {
      name: "true",
    },
  })
  revalidatePath('/users')
}