import { FieldErrors } from "react-hook-form";

export interface FormErrors {
    errors: FieldErrors<any>;
    attributes: string[];
}