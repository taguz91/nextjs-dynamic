import { FC } from 'react';
import { ContainerInput } from './ContainerInput';
import { TextField } from '../../../interfaces';


export const TextInput: FC<TextField> = ({ showErrors, errors, register, name, label, type, placeholder }) => {
    return (
        <ContainerInput showErrors={showErrors} label={label} errors={errors} name={name}>

            <input
                {...register(name)}
                placeholder={placeholder}
                className='mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    placeholder-shown:border-gray-500
                    focus:border-indigo-300 
                    focus:ring 
                    focus:ring-indigo-200 
                    focus:ring-opacity-50'
                type={type} />

        </ContainerInput>
    )
}

export default TextInput;