import { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface Props {
    label: string;
    name: string;
    type: InputType,
    register: UseFormRegister<any>,
    errors: FieldErrors<any>,
    validators?: any,
}

type InputType =
    | 'text'
    | 'number'
    | 'password';

export const TextInput: FC<Props> = ({ errors, register, name, label, type, validators }) => {
    if (!validators) {
        validators = {};
    }

    return (
        <div className='my-2'>
            <label
                className='block'
            >
                <span className='font-medium '>
                    {label}
                </span>

                <input
                    {...register(name, { ...validators })}
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

                {errors[name] && <span className='text-red-600'> {errors[name]?.message} </span>}

            </label>
        </div>
    )
}

export default TextInput;