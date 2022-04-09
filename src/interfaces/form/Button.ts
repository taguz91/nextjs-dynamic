import { IconProps } from '../Icon';


export interface Button {
    label: string;
    type: ButtonType;
    icon?: IconProps;
}

export interface ActionButton extends Button {
    onBack: () => void;
}

type ButtonType = 'submit' | 'button';