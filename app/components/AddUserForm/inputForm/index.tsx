import { UseFormRegister } from "react-hook-form";


export default function InputForm(props: {
    label: string,
    name: string,
    id: string,
    register: UseFormRegister<Inputs>;
}) {

    return (
        <>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    {props.name}
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id={props.id} type="text" placeholder={props.name} {...props.register(props.label)} />
                {/*                 {props.hasError && props.error && <p className="text-red-500 text-xs italic">{props.error}</p>}
 */}
            </div>
        </>

    )
}