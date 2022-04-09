import { FC, useContext } from 'react';
import Loading from "../ui/Loading";
import { useForm, SubmitHandler } from 'react-hook-form';
import { LoadingContext } from '../../context/LoadingContext';
import { FormField } from '../../../interfaces/FormField';
import { renderFormFields } from '../../../helpers/renderFormFields';
import { DynamicComponent } from '../../../interfaces/DynamicComponent';
import { renderDynamicComponent } from '../../../helpers/dynamicGeneration';

interface Props {
    inputs: FormField[];
    dynamic: DynamicComponent;
}

export const FormDynamicContainer: FC<Props> = ({ inputs, dynamic }) => {

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
            <form onSubmit={handleSubmit(onSubmit)}>
                {renderFormFields(register, errors, inputs)}

                {renderDynamicComponent(dynamic)}
            </form>
        </>
    );

}

export default FormDynamicContainer;