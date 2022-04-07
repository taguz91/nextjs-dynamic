import { HookField } from './TextField';

export interface Option {
    value: string;
    label?: string;
}

export interface SelectField extends HookField {
    options: Option[];
}