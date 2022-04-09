import { FC, useContext } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { FormContainerProps } from "../../../interfaces";
import { LoadingContext } from '../../context/LoadingContext';
import Loading from '../ui/Loading';
import { renderDynamicComponent } from '../../../helpers';
import { createYupDynamicSchema } from '../../../helpers/createYupDynamicSchema';

import { yupResolver } from '@hookform/resolvers/yup';

export const FormContainer: FC<FormContainerProps> = ({
    inputs,
    validations,
    onSubmit,
    onBack,
}) => {

    const yupSchema = createYupDynamicSchema(validations);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(yupSchema)
    });

    const { toggle } = useContext(LoadingContext);

    const onSubmitBase: SubmitHandler<any> = data => {
        toggle();
        if (onSubmit) {
            onSubmit(data);
        }
        setTimeout(() => {
            toggle();
        }, 1000);
    }

    return (
        <>
            <Loading />
            <form className='mt-2' onSubmit={handleSubmit(onSubmitBase)} >

                {inputs.map((component, index) => {
                    return renderDynamicComponent(
                        component,
                        {
                            register,
                            errors,
                            onBack,
                            key: index,
                        }
                    )
                })}
            </form>
        </>
    );
}

export default FormContainer;