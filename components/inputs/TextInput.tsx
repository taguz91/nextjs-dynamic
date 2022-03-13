import { FC } from 'react';

interface Props {
    label: string;
    type: InputType,
}

type InputType =
    | 'text'
    | 'number';

export const TextInput: FC<Props> = ({ label, type }) => {
    return (
        <div className='my-2'>
            <label
                className='block'
            >
                <span className='font-medium '>
                    {label}
                </span>

                <input
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
            </label>
        </div>
    )
}

export default TextInput;