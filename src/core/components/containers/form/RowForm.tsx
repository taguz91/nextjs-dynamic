import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
    register: UseFormRegister<any>,
    errors: FieldErrors<any>,
}

export const RowForm: FC<Props> = () => {
    return (
        <>

        </>
    );
}

export default RowForm;