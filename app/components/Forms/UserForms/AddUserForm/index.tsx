import { newUser, newUserTest } from "@/utils/actions";
import InputForm from "../../../Inputs/inputForm";
import PickerComponent from "../../../Inputs/PickerComponent";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputsUser } from "@/utils/types/inputTypes";
import InputContainer from "@/app/components/InputContainer";

export default function AddUserForm(props: { userId: string }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputsUser>();
  const onSubmit: SubmitHandler<InputsUser> = (data) => {
    newUserTest(data);
  };

  const optionsValues = ["Admin", "Turnos", "Puerta", "Pagos"];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="flex flex-wrap -mx-1000 mb-6">
          <InputContainer id="grid-first-name" name="Nombre" label="name">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder={"Nombre"}
              {...register("name")}
            />
          </InputContainer>
          <InputContainer id="grid-email" name="Email" label="email">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-email"
              type="text"
              placeholder={"Email"}
              {...register("email")}
            />
          </InputContainer>
          <InputContainer id="grid-role" label="role" name="Rol">
            <select
              className="block appearance-none w-full bg-gray-200 border border-blue-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-role"
              {...register("role")}
            >
              {optionsValues.map((option) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </InputContainer>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              {...register("password")}
              name="password"
              id="grid-password"
              type="text"
              placeholder="******************"
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you like
            </p>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          type="submit"
        >
          Crear usuario
        </button>
      </form>
    </>
  );
}
