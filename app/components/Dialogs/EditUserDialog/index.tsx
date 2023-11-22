'use client'

import { useState, useEffect } from 'react'
import { Button, Dialog, DialogContent, DialogActions, ButtonGroup } from '@mui/material'
import AddUserForm from '../../AddUserForm';

export default function EditUserDialog(props: any) {


    return (
        <>
            <Dialog open={props.open} onClose={() => props.onClose}>
                <DialogContent>
                    <AddUserForm userId={props.id} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose} color="primary">
                        Cerrar
                    </Button>
                    <Button onClick={props.onClose} style={{ backgroundColor: "green", color: "white" }}>
                        Guardar Cambios
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}