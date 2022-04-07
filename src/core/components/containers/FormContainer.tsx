import { FC, useContext } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { DynamicComponent, YupConfig } from "../../../interfaces";
import { LoadingContext } from '../../context/LoadingContext';
import Loading from '../ui/Loading';
import { renderDynamicComponent } from '../../../helpers';
import { createYupDynamicSchema } from '../../../helpers/createYupDynamicSchema';

import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
    inputs: DynamicComponent[];
    validations: YupConfig[];
}

export const FormContainer: FC<Props> = ({ inputs, validations }) => {

    const yupSchema = createYupDynamicSchema(validations);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(yupSchema)
    });

    const { toggle } = useContext(LoadingContext);

    const onSubmit: SubmitHandler<any> = data => {
        toggle();
        console.log(data, 'RELOAD THE PAGE WHY');

        setTimeout(() => {
            toggle();
        }, 1000);
    }

    return (
        <>
            <Loading />
            <form onSubmit={handleSubmit(onSubmit)} >

                {inputs.map((component, index) => {
                    return renderDynamicComponent(
                        component,
                        {
                            register,
                            errors,
                            key: index
                        }
                    )
                })}
            </form>
        </>
    );
}

export default FormContainer;