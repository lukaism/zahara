"use client";
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from "ag-grid-react";
import { Grid } from '@mui/material';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import AddAtendantForm from '../../Forms/AtendantForms/AddAtendantForm';
import UserActionButtons from '../../UserActionButtons';

type User = {
    id: String;
    name: String;
    role: String;
    email: String;
    password: String;
}

type UserTableProps = {
    children?: React.ReactNode;
    users: User[];
}


export default function AtendantsComponent(props: UserTableProps) {


    // Each Column Definition results in one Column.
    const columnDefs = [
        {
            headerName: "Acciones", field: 'id', cellRenderer: UserActionButtons
        },
        { field: 'name', filter: true },
        { field: 'email', filter: true },
        { field: 'password', filter: true },
        { field: 'role' }
    ]

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className="ag-theme-alpine" style={{ width: 700, height: 500 }}>
                    <AgGridReact
                        rowData={props.users} // Row Data for Rows
                        columnDefs={columnDefs} // Column Defs for Columns
                        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                        rowSelection='multiple' // Options - allows click selection of rows
                    />
                </div >
            </Grid>
            <Grid item xs={4}>
                <AddAtendantForm userId='' />
            </Grid>
        </Grid>
    );
};



