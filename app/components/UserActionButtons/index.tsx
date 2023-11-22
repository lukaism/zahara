'use client'

import { useState, useEffect } from 'react'
import { Button, Dialog, DialogContent, DialogActions, ButtonGroup } from '@mui/material'
import AddUserForm from '../AddUserForm';
import EditUserDialog from '../Dialogs/EditUserDialog';
import DeleteUserDialog from '../Dialogs/DeleteUserDialog';

export default function UserActionButtons(props: any) {
    // props is ICellRenererParams. See:
    // https://www.ag-grid.com/react-grid/component-cell-renderer/#cell-renderer-component-2
    const { id } = props.value;
    console.log("props", props)
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(false);
    const onCloseEdit = () => setOpenEditDialog(false);
    const onCloseDelete = () => setOpenDeleteDialog(false);

    return (
        <>
            <ButtonGroup style={{ marginRight: "4px" }}>
                <Button style={{ backgroundColor: "red", color: "white", maxWidth: "70px" }} onClick={() => setOpenDeleteDialog(true)}>Borrar</Button>
                <Button style={{ backgroundColor: "green", color: "white", maxWidth: "70px" }} onClick={() => setOpenEditDialog(true)}>Editar</Button>
            </ButtonGroup>

            <EditUserDialog open={openEditDialog} id={id ? id : "0"} onClose={onCloseEdit} />
            <DeleteUserDialog open={openDeleteDialog} id={id ? id : "0"} onClose={onCloseDelete} />
            
        </>
    );
}