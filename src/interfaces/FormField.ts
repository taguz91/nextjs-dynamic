

export interface FormField {
    name: string;
    label?: string;
    type: string;
    value: string;
    validators: FormValidations[];
}

export interface FormValidations {
    type: string;
    params: any[];
}

export interface YupConfig {
    id: string;
    validationType: string;
    validations: FormValidations[];
}