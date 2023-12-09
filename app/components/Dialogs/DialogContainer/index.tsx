'use client'

import { Button, Dialog, DialogContent, DialogActions, ButtonGroup } from '@mui/material'
import { SubmitHandler } from "react-hook-form";
import { InputsCountry } from '@/utils/types/inputTypes';


interface DialogButtonsProps {
    onActionDialog: any,
    //onActionDialog: React.MouseEventHandler | ((data: SubmitHandler<InputsCountry>, id: string) => void);
    onCloseDialog: React.MouseEventHandler
    open: boolean,
    warning: boolean,
    showConfirmButton: boolean,
    showCancelButton: boolean,
    textCancel: string,
    textAction: string
    children: React.ReactElement
}


export default function DialogContainer(
    {
        open,
        warning,
        showConfirmButton,
        showCancelButton,
        onCloseDialog,
        onActionDialog,
        textCancel,
        textAction,
        children
    }: DialogButtonsProps) {

    const style = warning ? "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-700 rounded" : "bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-700 rounded"


    return (
        <>
            <Dialog open={open} onClose={() => onCloseDialog}>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    {showCancelButton && <Button onClick={onCloseDialog} color="primary">
                        {textCancel}
                    </Button>}
                    {showConfirmButton && <Button onClick={onActionDialog} className={style}>
                        {textAction}
                    </Button>}
                </DialogActions>
            </Dialog>
        </>
    );
}