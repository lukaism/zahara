"use server";
import db from "@/utils/db";
import { revalidatePath } from "next/cache";
import { InputsAtendant, InputsCountry, InputsUser } from "./types/inputTypes";

export const newUser = async (data: FormData) => {
  const newUserName = data.get("name") as string;
  const newUserEmail = data.get("email") as string;
  const newUserPWD = data.get("password") as string;
  const newUserRole = data.get("role") as string;
  if (newUserName && newUserEmail && newUserPWD && newUserRole) {
    await db.user.create({
      data: {
        name: newUserName,
        email: newUserEmail,
        password: newUserPWD,
        role: newUserRole,
      },
    });
    revalidatePath("/users");
  }
};
export const deleteUser = async (id: string) => {
  if (id) {
    await db.user.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/users");
  }
};

export const editUser = async (data: InputsUser, id: string) => {
  const newUserName = data.name;
  const newUserEmail = data.email;
  const newUserPWD = data.password;
  const newUserRole = data.role;
  if (newUserName && newUserEmail && newUserPWD && newUserRole && id) {
    try {
      await db.user.update({
        where: {
          id: id,
        },
        data: {
          name: newUserName,
          email: newUserEmail,
          password: newUserPWD,
          role: newUserRole,
        },
      });
      revalidatePath("/user");
    } catch (error: any) {
      throw new Error("El pais ya existe!");
    }
  }
};

export const newUserTest = async (data: InputsUser) => {
  const newUserName = data.name;
  const newUserEmail = data.email;
  const newUserPWD = data.password;
  const newUserRole = data.role;
  if (newUserName && newUserEmail) {
    await db.user.create({
      data: {
        name: newUserName,
        email: newUserEmail,
        password: newUserPWD,
        role: newUserRole,
      },
    });
    revalidatePath("/users");
  }
};

export const createNewCountry = async (data: InputsCountry) => {
  const newCountry = data.name;
  if (newCountry) {
    try {
      await db.country.create({
        data: {
          name: newCountry,
        },
      });
      revalidatePath("/countries");
    } catch (error: any) {
      throw new Error("El pais ya existe!");
    }
  }
};
export const editCountry = async (data: InputsCountry, id: string) => {
  const newCountryName = data.name;
  if (newCountryName && id) {
    try {
      await db.country.update({
        where: {
          id: id,
        },
        data: {
          name: newCountryName,
        },
      });
      revalidatePath("/countries");
    } catch (error: any) {
      throw new Error("El pais ya existe!");
    }
  }
};
export const deleteCountry = async (id: string) => {
  if (id) {
    await db.country.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/countries");
  }
};

export const completeTodo = async (id: string) => {
  await db.user.update({
    where: { id },
    data: {
      name: "true",
    },
  });
  revalidatePath("/users");
};
