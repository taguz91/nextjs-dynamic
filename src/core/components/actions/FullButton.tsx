import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Icon {
    icon: any;
    color: string;
}

interface Props {
    label: string;
    icon?: Icon;
}

export const FullButton: FC<Props> = ({ label, icon }) => {
    return (
        <div className='mx-auto w-full my-5'>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded w-full" type="submit">
                {label}

                {icon && (
                    <FontAwesomeIcon icon={icon.icon} color={icon.color || 'text-black'} className='ml-3' />
                )}
            </button>

        </div>
    );
}

export default FullButton;