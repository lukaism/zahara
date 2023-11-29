import { ReactComponent } from "ag-grid-react/lib/shared/reactComponent";

export interface InputsAtendant {
    name: String,
    lastName: string,
    secondLastName: string,
    nif: string,
    email: string,
    phone: string,
    emergencyContact: string,
    emergencyPhone: string,
    hotelName: string,
    bus: string,
    matricula: string,
    country: string,
    city: string,
    arrivalDate: Date,
    departureDate: Date,
    celiac: string,
    vegetarian: string,
};
export interface InputsCountry {
    name: string,
};

export type LinkInfo = {
    href: string,
    name: string
}

export interface DialogButtonsProps {
    onActionDialog: (message: string) => void;
    onCloseDialog: (message: string) => void;
    open: boolean,
    warning: boolean,
    textCancel: string,
    textAction: string
    children: ReactComponent
}