import { FC, useContext } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { getDynamicComponent } from "../../../helpers";
import { DynamicComponent } from "../../../interfaces";
import { LoadingContext } from '../../context/LoadingContext';
import Loading from '../ui/Loading';

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

    console.log('Loaded pageeee!!!');

    return (
        <>
            <Loading />
            <form onSubmit={handleSubmit(onSubmit)} >


                {inputs.map((component, index) => {
                    const Dynamic = getDynamicComponent(component.type);
                    return <Dynamic key={index} {...{
                        ...component.props,
                        register,
                        errors
                    }} />;
                })}

                <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded" />
            </form>
        </>
    );
}

export default FormContainer;