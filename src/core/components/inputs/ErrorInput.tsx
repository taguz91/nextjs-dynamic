import { FC } from "react";
import { FieldErrors } from "react-hook-form";

interface Props {
    name: string;
    errors: FieldErrors<any>;
}

export const ErrorInput: FC<Props> = ({ name, errors }) => {
    if (errors[name]) {
        return (
            <span className='text-red-600 font-medium'> {errors[name]?.message} </span>
        );
    }

    return (
        <></>
    );
}

export default ErrorInput;