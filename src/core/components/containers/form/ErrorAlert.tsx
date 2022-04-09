import { FC } from "react";
import { FormErrors } from "../../../../interfaces";

export const ErrorAlert: FC<FormErrors> = ({ errors, attributes }) => {
    const existErrors = attributes.reduce((prev, current) => {
        if (errors[current]) {
            return prev + 1;
        }
        return prev;
    }, 0);

    if (existErrors > 0) {
        return (
            <div className="my-3 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">

                {attributes.map((attribute, index) => {
                    return errors[attribute]
                        ? (<p className="mb-0" key={index}>{errors[attribute]?.message}</p>)
                        : '';
                })}

            </div>
        );
    }

    return (<></>);
}

export default ErrorAlert;