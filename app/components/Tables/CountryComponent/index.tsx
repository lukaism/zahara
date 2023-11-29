"use client";
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from "ag-grid-react";
import { Grid } from '@mui/material';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import AddCountryForm from '../../Forms/CountryForms/AddCountryForm';
import CountryActionButtons from '../../CountryActionButtons';

type Country = {
    id: String;
    name: String;

}

type CountryTableProps = {
    children?: React.ReactNode;
    countries: Country[];
}


export default function CountryComponent(props: CountryTableProps) {


    // Each Column Definition results in one Column.
    const columnDefs = [
        {
            headerName: "Acciones", field: 'id', cellRenderer: CountryActionButtons
        },
        { field: 'name', filter: true }
    ]

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className="ag-theme-alpine" style={{ width: 350, height: 500 }}>
                    <AgGridReact
                        rowData={props.countries} // Row Data for Rows
                        columnDefs={columnDefs} // Column Defs for Columns
                        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                        rowSelection='multiple' // Options - allows click selection of rows
                    />
                </div >
            </Grid>
            <Grid item xs={4}>
                <AddCountryForm countryId={""} />
            </Grid>
        </Grid>
    );
};



