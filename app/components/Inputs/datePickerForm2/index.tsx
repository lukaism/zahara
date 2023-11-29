import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react"



export default function DatePickerForm2(props: {
    placeHolder: string,
    id: string,
    name: string
}) {

    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });

    const handleValueChange = (newValue: unknown) => {
        setValue(newValue);
    }



    return (
        <>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    {props.placeHolder}
                </label>
                <div>
                    <Datepicker
                        asSingle={true}
                        value={value}
                        onChange={handleValueChange}
                        showShortcuts={true}
                    />

                </div>
            </div>
        </>

    )
}