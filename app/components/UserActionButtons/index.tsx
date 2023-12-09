"use client";

import { useState, useEffect } from "react";
import { deleteUser, editUser } from "@/utils/actions";
import { Button, ButtonGroup } from "@mui/material";
import AddUserForm from "../Forms/UserForms/AddUserForm";
import DialogContainer from "../Dialogs/DialogContainer";
import EditUserForm from "../Forms/UserForms/EditUserForm";
import { InputsUser } from "@/utils/types/inputTypes";

export default function UserActionButtons(props: any) {
  // props is ICellRenererParams. See:
  // https://www.ag-grid.com/react-grid/component-cell-renderer/#cell-renderer-component-2
  const [id, setId] = useState(props.id);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [data, setData] = useState<InputsUser | undefined>();
  const [loading, setLoading] = useState(false);
  const onCloseEdit = () => setOpenEditDialog(false);
  const onCloseDelete = () => setOpenDeleteDialog(false);

  useEffect(() => {
    if (id == undefined) {
      setId(props.value);
      setData(props.data);
    }
    return () => {};
  }, [id, props.value, props.data]);

  function handleDeleteUser() {
    deleteUser(id);
  }

  function handleEditUser() {
    deleteUser(id);
  }

  return (
    <>
      <ButtonGroup style={{ marginRight: "4px" }}>
        <Button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-700 rounded"
          onClick={() => setOpenDeleteDialog(true)}
        >
          Borrar
        </Button>
        <Button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-700 rounded"
          onClick={() => {
            setData(props.data);
            setOpenEditDialog(true);
          }}
        >
          Editar
        </Button>
      </ButtonGroup>

      <DialogContainer
        open={openDeleteDialog}
        onCloseDialog={onCloseDelete}
        showCancelButton={true}
        warning={true}
        showConfirmButton={true}
        onActionDialog={handleDeleteUser}
        textAction="Borrar Usuario"
        textCancel="Cancelar"
      >
        <div>Seguro que quieres borrar el usuario?</div>
      </DialogContainer>
      <DialogContainer
        open={openEditDialog}
        onCloseDialog={onCloseEdit}
        warning={false}
        showConfirmButton={false}
        showCancelButton={false}
        onActionDialog={handleEditUser}
        textAction="Editar Usuario"
        textCancel="Cancelar"
      >
        <EditUserForm userId={id} onCloseDialog={onCloseEdit} userData={data} />
      </DialogContainer>
    </>
  );
}
