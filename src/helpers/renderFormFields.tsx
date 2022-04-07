import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormField } from '../interfaces';
import TextInput from '../core/components/inputs/TextInput';

const fieldsMap: Record<string, any> = {
    text: TextInput,
    number: TextInput
}

export const renderFormFields = (
    register: UseFormRegister<any>,
    errors: FieldErrors<any>,
    fields: FormField[]
) => {
    // Mapping the dynamic fields
    return (
        <>
            {fields.map((field, index) => {
                const FieldComponent = fieldsMap[field.type];

                return (
                    <FieldComponent
                        key={index}
                        register={register}
                        errors={errors}
                        name={field.name}
                        label={field.label}
                        type={field.type}
                    />
                );
            })}
        </>
    );
}