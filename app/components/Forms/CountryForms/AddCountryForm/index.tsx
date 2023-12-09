import { createNewCountry } from '@/utils/actions'
import "react-datepicker/dist/react-datepicker.css";
import { useForm, SubmitHandler } from "react-hook-form";
import InputContainer from '../../../InputContainer';
import { InputsCountry } from '@/utils/types/inputTypes';
import toast from 'react-hot-toast'



export default function AddCountryForm(props: {
    countryId: string
}) {
    const { register, handleSubmit, control, formState: { errors } } = useForm<InputsCountry>();


    const onSubmit: SubmitHandler<InputsCountry> = async (data) => {
        try {
            await createNewCountry(data)
        }
        catch (error: any) {
            toast.error(error.message)
        }
    }

    return (
        <>
            <form onSubmit={(handleSubmit(onSubmit))} className="">
                <div className="flex flex-wrap -mx-1000 mb-6 justify-end flex-col items-center">
                    <InputContainer id="grid-first-name" name="Nombre" label="name">
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={"Nombre Pais"} {...register("name")} />
                    </InputContainer>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded md:w-1/2" type="submit">
                        Añadir Pais
                    </button>
                </div>
            </form>
        </>

    )
}