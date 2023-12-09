import { editCountry } from '@/utils/actions'
import "react-datepicker/dist/react-datepicker.css";
import { useForm, SubmitHandler } from "react-hook-form";
import InputContainer from '../../../InputContainer';
import { InputsCountry } from '@/utils/types/inputTypes';
import { Button } from '@mui/material';
import toast from 'react-hot-toast';



export default function EditCountryForm(props: {
    countryId: string
    onCloseDialog: any
}) {
    const { register, handleSubmit, control, formState: { errors } } = useForm<InputsCountry>();


    const onSubmit: SubmitHandler<InputsCountry> = async (data) => {
        try {
            await editCountry(data, props.countryId)
        }
        catch (error: any) {
            toast.error(error.message)
        }
    }

    return (
        <>
            <form onSubmit={(handleSubmit(onSubmit))} className="">
                <div className="flex flex-wrap -mx-1000 mb-2 w-400">
                    <InputContainer id="grid-first-name" name="Pais" label="Pais">
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={"Pais"} {...register("name")} />
                    </InputContainer>
                </div>
                <div className="flex flex-wrap -mx-1000 mb-2 w-400 justify-end">

                    <Button onClick={props.onCloseDialog} color="primary">
                        Cancelar
                    </Button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded" type="submit">
                        Editar
                    </button>
                </div>
            </form>
        </>

    )
}