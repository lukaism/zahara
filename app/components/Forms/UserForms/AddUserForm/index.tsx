import { newUser, newUserTest } from '@/utils/actions'
import InputForm from '../../../Inputs/inputForm';
import PickerComponent from '../../../Inputs/PickerComponent';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { InputsAtendant } from '@/utils/types/inputTypes';


export default function AddUserForm(props: {
    userId: string
}) {
    const { register, handleSubmit, control, formState: { errors } } = useForm<InputsAtendant>();


    const onSubmit: SubmitHandler<InputsAtendant> = data => {
        newUserTest(data)
    }

    return (
        <>
            <form action={newUser} onSubmit={(handleSubmit(onSubmit))} className="">
                <div className="flex flex-wrap -mx-1000 mb-6">
                    <InputForm id="grid-first-name" register={register} name="Nombre" label="name" />
                    <InputForm id="grid-email" register={register} name="Email" label="email" />
                    <PickerComponent id="grid-role" register={register} label="role" name='Rol' optionsValues={["Admin", "Turnos", "Puerta", "Pagos"]} />

                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Password
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="******************" />
                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="submit">
                    Crear usuario
                </button>
            </form>
        </>

    )
}