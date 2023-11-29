import { newUser, newUserTest } from '@/utils/actions'
import InputForm from '../../../Inputs/inputForm';
import PickerComponent from '../../../Inputs/PickerComponent';
import DatePickerForm from '../../../Inputs/datePickerForm';
import DatePickerForm2 from '../../../Inputs/datePickerForm2';
//import DatePickerForm3 from './datePickerForm3';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from 'react';
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { InputsAtendant } from '@/utils/types/inputTypes';



export default function AddAtendantForm(props: {
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
                    <InputForm id="grid-last-name" register={register} name="Apellido" label="lastName" />

                    <InputForm id="grid-second-last-name" register={register} label="secondLastName" name="Segundo Apellido" />
                    <InputForm id="grid-nif" register={register} name="NIF" label="nif" />
                    <InputForm id="grid-email" register={register} name="Email" label="email" />
                    <InputForm id="grid-phone" register={register} name="Telefono" label="phone" />
                    <InputForm id="grid-contact-urgency" register={register} name="Contacto de Urgencia" label="emergencyContact" />
                    <InputForm id="grid-phone-urgency" register={register} name="Telefono Urgencia" label="emergencyPhone" />
                    <InputForm id="grid-hotel-name" register={register} name="Nombre Hotel" label="hotel" />
                    <InputForm id="grid-matricula" register={register} name="Matricula" label="matricula" />
                    <PickerComponent id="grid-bus" register={register} label="bus" name="Bus" optionsValues={["Si", "No"]} />
                    <PickerComponent id="grid-country" register={register} label="country" name='Pais' optionsValues={["España", "Francia", "Brasil", "Andorra"]} />
                    <InputForm id="grid-city" register={register} name="Ciudad" label="city" />
{/*                     <Controller
                        control={control}
                        name="arrivalDate"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <DatePicker
                                onChange={onChange} // send value to hook form
                                onBlur={onBlur} // notify when input is touched/blur
                                selected={value}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="departureDate"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <DatePicker
                                onChange={onChange} // send value to hook form
                                onBlur={onBlur} // notify when input is touched/blur
                                selected={value}
                            />
                        )}
                    />
                    <DatePickerForm3 id="grid-arrival" name="llegada" label="arrivalDate" />
                    <DatePickerForm3 id="grid-departure" name="salida" label="departureDate" /> */}
                    <PickerComponent id="grid-celiac" register={register} label="celiac" name="Celiaco" optionsValues={["Si", "No"]} />
                    <PickerComponent id="grid-vegetarian" register={register} label="vegetarian" name="Vegetariano" optionsValues={["Si", "No"]} />
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