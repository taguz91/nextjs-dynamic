import { FC, useContext } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { DynamicComponent } from "../../../interfaces";
import { LoadingContext } from '../../context/LoadingContext';
import Loading from '../ui/Loading';
import { renderDynamicComponent } from '../../../helpers';

interface Props {
    inputs: DynamicComponent[];
}

export const FormContainer: FC<Props> = ({ inputs }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

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