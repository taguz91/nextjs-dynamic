import { FieldErrors, UseFormRegister } from "react-hook-form";


type InputType =
    | 'text'
    | 'number'
    | 'password'
    | 'date';

export interface BaseField {
    label?: string;
    name: string;
    errors: FieldErrors<any>
}

export interface HookField extends BaseField {
    register: UseFormRegister<any>,
}

export interface TextField extends HookField {
    type: InputType;
    placeholder?: string;
}

export interface IconField {
    icon: any;
    color: string;
    filled?: boolean;
}

export interface IconTextField extends TextField {
    icon: IconField;
}