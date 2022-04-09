import { FC } from "react";

interface Props {
    text: string;
    alight: Alinght;
}

type Alinght = 'left' | 'center' | 'right';

export const TextPrimary: FC<Props> = ({
    text,
    alight = 'left'
}) => {

    switch (alight) {
        case 'left':
            return (<p className='mb-0 w-80 text-primary text-left'>
                {text}
            </p>);

        case 'center':
            return (<p className='mb-0 w-80 text-primary text-center'>
                {text}
            </p>);
        case 'right':
            return (<p className='mb-0 w-80 text-primary text-right'>
                {text}
            </p>);
        default:
            break;
    }
    return (<></>);
}

export default TextPrimary;