import { UseFormRegister } from "react-hook-form";


export default function InputContainer(props: {
    label: string,
    name: string,
    id: string,
    children: any
}) {

    return (
        <>
            <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    {props.name}
                </label>
                {props.children}
            </div>
        </>

    )
}