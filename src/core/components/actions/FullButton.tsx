import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "../../../interfaces";

export const FullButton: FC<Button> = ({ label, icon, type = 'submit' }) => {
    return (
        <div className='mx-auto w-full my-5'>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded w-full" type={type}>
                {label}

                {icon && (
                    <FontAwesomeIcon icon={icon.icon} color={icon.color || 'text-black'} className='ml-3' />
                )}
            </button>

        </div>
    );
}

export default FullButton;