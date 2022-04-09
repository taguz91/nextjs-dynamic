import { FC } from "react";
import { FormBaseProps } from "../../../../interfaces";
import FormContainer from "../FormContainer";

export const FormEnrolamiento: FC<FormBaseProps> = ({
    inputs,
    validations
}) => {

    const onSubmit = (data: any) => {
        console.log('SAVE THE FOLLOWING DATA INFORMATION', data);
    }

    const onBack = () => {
        console.log('VAMOS A RETROCEDER DE PAGINA');
    }

    return (
        <FormContainer
            inputs={inputs}
            validations={validations}
            onSubmit={onSubmit}
            onBack={onBack}
        />
    );
}

export default FormEnrolamiento;