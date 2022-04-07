import { FC } from "react";
import { BaseField } from "../../../interfaces";
import ErrorInput from './ErrorInput';


export const ContainerInput: FC<BaseField> = ({ children, label, errors, name }) => {
    return (
        <div className='my-2'>
            {label && (
                <label className='block font-medium'>
                    {label}
                </label>
            )}

            {children}
            <ErrorInput errors={errors} name={name} />
        </div>
    );
}

export default ContainerInput;