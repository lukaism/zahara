'use client'
import Datepicker from "tailwind-datepicker-react"
import { useState } from "react"



export default function DatePickerForm(props: {
    placeHolder: string,
    id: string,
    name: string
}) {

    const [show, setShow] = useState(false)
    const handleChange = (selectedDate: Date) => {
        console.log(selectedDate)
    }
    const handleClose = (state: boolean) => {
        setShow(state)
    }

    const options = {
        title: props.placeHolder,
        autoHide: true,
        todayBtn: false,
        clearBtn: true,
        clearBtnText: "Clear",
        maxDate: new Date("2030-01-01"),
        minDate: new Date("1950-01-01"),
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span>Anterior</span>,
            next: () => <span>Siguiente</span>,
        },
        defaultDate: new Date("2022-01-01"),
        language: "es",
        disabledDates: [],
        weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        inputNameProp: props.name,
        inputIdProp: props.name,
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric",
            month: "numeric",
            year: "numeric"
        }
    }

    return (
        <>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    {props.placeHolder}
                </label>
                <div>
                    <Datepicker primaryColor={"blue"} options={options} onChange={handleChange} show={show} setShow={handleClose} name={props.name} />
                </div>
                {/*                 {props.hasError && props.error && <p className="text-red-500 text-xs italic">{props.error}</p>}
 */}
            </div>
        </>

    )
}