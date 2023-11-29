/* import { Dayjs } from 'dayjs'; import { useState } from "react"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useForm, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';




export default function DatePickerForm3(props: {
    id: string,
    label: string,
    name: string
}) {
    const [startDate, setStartDate] = useState<Dayjs | null>(null);
    const { control } = useForm<InputsAtendant>();


    return (
        <>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    {props.name}
                </label>
                <Controller
                    name={props.label}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label={props.label}
                                control={control}
                                inputFormat="DD-MM-YYYY"
                                value={value}
                                onChange={(event) => { onChange(event); }}
                                renderInput={(params: Date) => {
                                    return (
                                        <TextField {...params} error={!!error} helperText={error?.message} />
                                    )
                                }} />
                        </LocalizationProvider>
                    )} />

            </div>
        </>

    )
} */