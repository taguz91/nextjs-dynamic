import { FC } from "react";

interface Props {
    text: string;
    alinght?: TextAlinght;
    weight?: TextWeight;
    color?: TextColor;
}

type TextAlinght = 'text-left'
    | 'text-center'
    | 'text-right'
    | 'text-justify';

type TextWeight = 'font-thin'
    | 'font-extralight'
    | 'font-light'
    | 'font-normal'
    | 'font-medium'
    | 'font-semibold'
    | 'font-bold'
    | 'font-extrabold'
    | 'font-black';

type TextColor = 'text-black'
    | 'text-white'
    | 'text-gray-400'
    | 'text-gray-900'
    | 'text-red-700'
    | 'text-red-900'
    | 'text-orange-400'
    | 'text-orange-900'
    | 'text-amber-400'
    | 'text-amber-900'
    | 'text-yellow-500'
    | 'text-yellow-900'
    | 'text-lime-500'
    | 'text-lime-900'
    | 'text-green-400'
    | 'text-green-900'
    | 'text-emerald-500'
    | 'text-emerald-900'
    | 'text-teal-400';


export const Text: FC<Props> = ({
    text,
    color = 'text-black',
    weight = 'font-medium',
    alinght = 'text-left'
}) => {
    return (
        <p className={`mb-0 ${color} ${weight} ${alinght}`}>
            {text}
        </p>
    );
}

export default Text;