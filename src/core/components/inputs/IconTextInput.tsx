import { FC } from "react";
import { IconTextField } from "../../../interfaces";
import ContainerInput from "./ContainerInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const IconTextInput: FC<IconTextField> = ({
    showErrors,
    errors,
    register,
    name,
    label,
    type,
    icon,
    placeholder
}) => {
    return (
        <ContainerInput showErrors={showErrors} label={label} errors={errors} name={name}>

            <div className="mt-1 
            relative 
            rounded-md 
            shadow-sm">

                <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${icon.filled && 'bg-slate-200 rounded-l-md pr-3'}`}>
                    <FontAwesomeIcon icon={icon.icon} color={icon.color || 'text-black'} />
                </div>

                <input
                    {...register(name)}
                    placeholder={placeholder}
                    className={`block
                    w-full
                    ${icon.filled ? 'pl-11 ' : 'pl-8 '}
                    pr-2
                    rounded-md
                    border-gray-300
                    focus:border-indigo-300 
                    focus:ring 
                    focus:ring-indigo-200 
                    focus:ring-opacity-50`}
                    type={type} />

            </div>


        </ContainerInput>
    );
}

export default IconTextInput;