import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { renderDynamicComponent } from "../../../../helpers";
import { DynamicComponent } from '../../../../interfaces';

interface Props {
    nRows: number,
    register: UseFormRegister<any>,
    errors: FieldErrors<any>,
    inputs: DynamicComponent[];
}

export const GridForm: FC<Props> = ({ nRows, register, errors, inputs }) => {
    return (
        <div className={`grid grid-flow-col gap-4 grid-rows-${nRows}`}>
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
        </div>
    );
}

export default GridForm;