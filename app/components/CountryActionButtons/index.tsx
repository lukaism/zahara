'use client'

import { useState, useEffect } from 'react'
import { Button, ButtonGroup } from '@mui/material'
import { deleteCountry, editCountry } from '@/utils/actions';
import EditCountryForm from '../Forms/CountryForms/EditCountryForm';
import DialogContainer from '../Dialogs/DialogContainer';
import { useForm, SubmitHandler } from "react-hook-form";
import { InputsCountry } from '@/utils/types/inputTypes';




export default function CountryActionButtons(props: any) {
    const { register, handleSubmit, control, formState: { errors } } = useForm<InputsCountry>();

    const [id, setId] = useState(props.id)
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const onCloseEdit = () => setOpenEditDialog(false);
    const onCloseDelete = () => setOpenDeleteDialog(false);

    useEffect(() => {
        if (id == undefined) {
            setId(props.value)
        }
        return () => { }
    }, [])

    function handleDeleteCountry() {
        console.log("id 2bdelete", id)
        deleteCountry(id)
    }

    function handleEditCountry(data: SubmitHandler<InputsCountry>) {
    }
    const onSubmit: SubmitHandler<InputsCountry> = data => {
        editCountry(data, id)
    }

    return (
        <>
            <ButtonGroup style={{ marginRight: "4px" }}>
                <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-700 rounded" onClick={() => setOpenDeleteDialog(true)}>Borrar</Button>
                <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-700 rounded" onClick={() => setOpenEditDialog(true)}>Editar</Button>
            </ButtonGroup>

            <DialogContainer open={openDeleteDialog} onCloseDialog={onCloseDelete} showCancelButton={true} warning={true} showConfirmButton={true} onActionDialog={handleDeleteCountry} textAction='Borrar pais' textCancel='Cancelar'>
                <div>Seguro que quieres borrar el pais?</div>
            </DialogContainer>
            <DialogContainer open={openEditDialog} onCloseDialog={onCloseEdit} warning={false} showConfirmButton={false} showCancelButton={false} onActionDialog={handleEditCountry} textAction='Editar pais' textCancel='Cancelar'>
                <EditCountryForm countryId={id} onCloseDialog={onCloseEdit} />
            </DialogContainer>
        </>
    );
}