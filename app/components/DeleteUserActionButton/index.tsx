'use client'

import { useState, useEffect } from 'react'
import { Button, Dialog, DialogContent, DialogActions } from '@mui/material'
import AddUserForm from '../AddUserForm';

export default function DeleteUserActionButton(props: any) {
    // props is ICellRenererParams. See:
    // https://www.ag-grid.com/react-grid/component-cell-renderer/#cell-renderer-component-2
    const { id } = props.value;
    console.log("props", props)
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(false);
    const onClose = () => setOpen(false);

    /*   useEffect(() => {
          fetch('/api/profile-data')
              .then((res) => res.json())
              .then((data) => {
                  setData(data)
                  setLoading(false)
              })
      }, []) */


    return (
        <>
            <Button style={{ backgroundColor: "red", color: "white" }} onClick={() => setOpen(true)}>Borrar</Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogContent>
                    <div>Seguro que quieres borrar el usuario?</div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cerrar
                    </Button>
                    <Button onClick={onClose} color="error">
                        Borrar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}