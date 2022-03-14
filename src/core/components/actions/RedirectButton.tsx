import Link from 'next/link';
import { FC } from 'react';

interface Props {
    label: string;
    href: string;
}

export const RedirectButton: FC<Props> = ({ label, href }) => {
    return (
        <div className='mx-auto w-24 my-5'>
            <Link href={href}>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded'>
                    {label}
                </button>
            </Link>
        </div>
    )
}

export default RedirectButton;