'use client'

import { useState, useEffect } from 'react'
import { Button, Dialog, DialogContent, DialogActions, ButtonGroup } from '@mui/material'

export default function DeleteUserDialog(props: any) {
    // props is ICellRenererParams. See:
    // https://www.ag-grid.com/react-grid/component-cell-renderer/#cell-renderer-component-2
    console.log("props", props)
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(false);
    const onCloseEdit = () => setOpenEditDialog(false);

    return (
        <>
            <Dialog open={props.open} onClose={() => props.onclose()}>
                <DialogContent>
                    <div>Seguro que quieres borrar el usuario?</div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose} color="primary">
                        Cerrar
                    </Button>
                    <Button onClick={props.onClose} color="error">
                        Borrar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}