import { FC } from "react";
import { SelectField } from "../../../interfaces";
import { ContainerInput } from "./ContainerInput";

export const SelectInput: FC<SelectField> = ({ register, errors, name, label, options }) => {
    return (
        <ContainerInput label={label} errors={errors} name={name}>

            <select
                {...register(name)}
                className="mt-1
                    block 
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 
                    focus:ring 
                    focus:ring-indigo-200 
                    focus:ring-opacity-50
                    ">

                {options.map((opt, index) => {
                    if (opt.value === '') {
                        return (
                            <option hidden key={index} value={opt.value} className="
                                text-zinc-200
                                ">
                                {opt.label}
                            </option>
                        );
                    }

                    return (
                        <option key={index} value={opt.value}>
                            {opt.label}
                        </option>
                    );
                })}

            </select>
        </ContainerInput>
    );
}

export default SelectInput;