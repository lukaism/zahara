'use client'

import { useState, useEffect } from 'react'
import { Button, ButtonGroup } from '@mui/material'
import { deleteCountry } from '@/utils/actions';
import EditCountryForm from '../Forms/CountryForms/EditCountryForm';
import DialogContainer from '../Dialogs/DialogContainer';

export default function CountryActionButtons(props: any) {
    const [id, setId] = useState(props.id)
    // props is ICellRenererParams. See:
    // https://www.ag-grid.com/react-grid/component-cell-renderer/#cell-renderer-component-
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(false);
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

    function handleEditCountry() {

    }

    return (
        <>
            <ButtonGroup style={{ marginRight: "4px" }}>
                <Button style={{ backgroundColor: "red", color: "white", maxWidth: "70px" }} onClick={() => setOpenDeleteDialog(true)}>Borrar</Button>
                <Button style={{ backgroundColor: "green", color: "white", maxWidth: "70px" }} onClick={() => setOpenEditDialog(true)}>Editar</Button>
            </ButtonGroup>

            <DialogContainer open={openDeleteDialog} onCloseDialog={onCloseDelete} warning={true} onActionDialog={handleDeleteCountry} textAction='Borrar pais' textCancel='Cancelar'>
                <div>Seguro que quieres borrar el pais?</div>
            </DialogContainer>
            <DialogContainer open={openEditDialog} onCloseDialog={onCloseEdit} warning={true} onActionDialog={handleEditCountry} textAction='Editar pais' textCancel='Cancelar'>
                <EditCountryForm countryId={id} />
            </DialogContainer>
        </>
    );
}