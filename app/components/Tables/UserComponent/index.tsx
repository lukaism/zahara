"use client";
import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Grid, Icon, Button, Tooltip } from "@mui/material";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import AddUserForm from "../../Forms/UserForms/AddUserForm";
import UserActionButtons from "../../UserActionButtons";
import { FaBeer } from "react-icons/fa";

type User = {
  id: String;
  name: String;
  role: String;
  email: String;
  password: String;
};

type UserTableProps = {
  children?: React.ReactNode;
  users: User[];
};

export default function UserComponentComponent(props: UserTableProps) {
  const [showForm, setShowForm] = useState(false);

  // Each Column Definition results in one Column.
  const columnDefs = [
    {
      headerName: "Acciones",
      field: "id",
      cellRenderer: UserActionButtons,
    },
    { field: "name", filter: true },
    { field: "email", filter: true },
    { field: "password", filter: true },
    { field: "role" },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className="flex flex-wrap -mx-1000 mb-6 justify-end flex-col items-end">
          <Button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-700 rounded"
            onClick={() => setShowForm(!showForm)}
          >
            <Tooltip title="Añadir usuario">
              <span>
                <FaBeer />
              </span>
            </Tooltip>
          </Button>
        </div>
      </Grid>
      <Grid item xs={showForm ? 6 : 12}>
        <div
          className="ag-theme-alpine"
          style={{ width: showForm ? 600 : 1200, height: 500 }}
        >
          <AgGridReact
            rowData={props.users} // Row Data for Rows
            columnDefs={columnDefs} // Column Defs for Columns
            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
            rowSelection="multiple" // Options - allows click selection of rows
          />
        </div>
      </Grid>
      {showForm && (
        <Grid item xs={4}>
          <AddUserForm userId="" />
        </Grid>
      )}
    </Grid>
  );
}
