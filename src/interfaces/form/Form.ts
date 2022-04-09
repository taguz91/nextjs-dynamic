import { DynamicComponent } from "../DynamicComponent";
import { YupConfig } from "../FormField";

export interface FormBaseProps {
    inputs: DynamicComponent[];
    validations: YupConfig[];
}

export interface FormContainerProps extends FormBaseProps {
    onSubmit?: (data: any) => void;
    onBack?: () => void;
}