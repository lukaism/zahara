'use server'
import db from '@/utils/db'
import { revalidatePath } from 'next/cache'

type Inputs = {
  name: String,
  lastName: string,
  secondLastName: string,
  nif: string,
  email: string,
  phone: string,
  emergencyContact: string,
  emergencyPhone: string,
  hotelName: string,
  bus: string,
  matricula: string,
  country: string,
  city: string,
  arrivalDate: Date,
  departureDate: Date,
  celiac: string,
  vegetarian: string,
};

export const newUser = async (data: FormData) => {
  const newUserName = data.get('name') as string
  const newUserEmail = data.get('email') as string
  const newUserPWD = data.get('password') as string
  const newUserRole = data.get('role') as string

  console.log("form data:", data)

  if (newUserName && newUserEmail && newUserPWD && newUserRole) {
    /*    await db.user.create({
         data: {
           name: newUserName,
           email: newUserEmail,
           password: newUserPWD,
           role: newUserRole,
         },
       })
       revalidatePath('/users') */
  }
}
export const newUserTest = async (data: Inputs) => {
  const newUserName = data.name
  const newUserLastName = data.lastName


  console.log("form data test:", data)
  console.log("form data name:", newUserName)
  console.log("form data lastname:", newUserLastName)

  if (newUserName && newUserLastName) {
    /*    await db.user.create({
         data: {
           name: newUserName,
           email: newUserEmail,
           password: newUserPWD,
           role: newUserRole,
         },
       })
       revalidatePath('/users') */
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