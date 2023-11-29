'use client'

import { Button, Dialog, DialogContent, DialogActions, ButtonGroup } from '@mui/material'


interface DialogButtonsProps {
    onActionDialog: React.MouseEventHandler
    onCloseDialog: React.MouseEventHandler
    open: boolean,
    warning: boolean,
    textCancel: string,
    textAction: string
    children: React.ReactElement
}


export default function DialogContainer(
    {
        open,
        warning,
        onCloseDialog,
        onActionDialog,
        textCancel,
        textAction,
        children
    }: DialogButtonsProps) {

    const style = warning ? { backgroundColor: "red", color: "white" } : { backgroundColor: "green", color: "white" }


    return (
        <>
            <Dialog open={open} onClose={() => onCloseDialog}>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseDialog} color="primary">
                        {textCancel}
                    </Button>
                    <Button onClick={onActionDialog} style={style}>
                        {textAction}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}