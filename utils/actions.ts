'use server'
import db from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { InputsAtendant, InputsCountry } from './types/inputTypes'


export const newUser = async (data: FormData) => {
  const newUserName = data.get('name') as string
  const newUserEmail = data.get('email') as string
  const newUserPWD = data.get('password') as string
  const newUserRole = data.get('role') as string


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
export const newUserTest = async (data: InputsAtendant) => {
  const newUserName = data.name
  const newUserLastName = data.lastName


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



export const createNewCountry = async (data: InputsCountry) => {
  const newCountry = data.name
  
  if (newCountry) {
    try {
      
      await db.country.create({
        data: {
          name: newCountry,
        },
      })
      revalidatePath('/countries')
    }
    catch (error: any) {
      throw new Error('El pais ya existe!');
    }
  }
}
export const editCountry = async (data: InputsCountry) => {
  const newCountry = data.name

  if (newCountry) {


    await db.country.create({
      data: {
        name: newCountry,
      },
    })
    revalidatePath('/countries')
  }
}
export const deleteCountry = async (id: string) => {


  if (id) {


    await db.country.delete({
      where: {
        id: id,
      },
    })
    revalidatePath('/countries')
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