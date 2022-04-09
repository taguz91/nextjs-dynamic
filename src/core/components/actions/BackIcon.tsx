import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { ActionButton } from "../../../interfaces";



export const BackIcon: FC<ActionButton> = ({
    label,
    type = 'button',
    icon = {
        icon: ['fa', 'arrow-left'],
        color: 'bg-blue-500'
    },
    onBack,
}) => {

    return (
        <div className="flex justify-start w-full">
            <button className="bg-transparent hover:text-gray-600 block" type={type} onClick={onBack}>
                <FontAwesomeIcon icon={icon.icon} color={icon.color || 'text-black'} className='mr-1' />

                {label}
            </button>
        </div>
    );
}

export default BackIcon;