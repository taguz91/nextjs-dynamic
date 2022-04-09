import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { RadioIconField } from "../../../../interfaces";
import ContainerInput from "../ContainerInput";



export const TypeAuth: FC<RadioIconField> = ({
    showErrors,
    errors,
    register,
    name,
    label,
    options
}) => {

    const [selectedIndex, setSelectedIndex] = useState<number>(-1);

    return (
        <ContainerInput
            showErrors={showErrors}
            label={label}
            errors={errors}
            name={name}
        >

            {options.map((option, index) => {
                const idInput = `option-${name}${index}`;
                const isChecked = selectedIndex === index;
                return (
                    <div
                        onClick={() => { setSelectedIndex(index) }}
                        className={`form-check 
                        rounded  
                        cursor-pointer 
                        py-3 px-2
                        my-2 
                        ${isChecked ? 'bg-blue-100 font-medium' : 'hover:bg-blue-100'}`}
                        key={index}>

                        <div className="mr-2 inline cursor-pointer ">
                            <FontAwesomeIcon icon={option.icon} color={option.color || 'text-black'} />
                        </div>

                        <input
                            {...register(name)}
                            id={idInput}
                            value={option.value}
                            type="radio"
                            className=" 
                            hidden 
                            cursor-pointer 
                            " />

                        <label
                            className="form-check-label 
                            inline-block 
                            text-gray-800 
                            cursor-pointer "
                            htmlFor={idInput}>
                            {option.label}
                        </label>
                    </div>
                );
            })}

        </ContainerInput>
    );
}

export default TypeAuth;