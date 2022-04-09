import { HookField } from './TextField';
import { IconProps } from '../Icon';

interface IconRadio extends IconProps {
    label: string;
    value: string;
}

export interface RadioField extends HookField {

}

export interface RadioIconField extends HookField {
    options: IconRadio[]
}