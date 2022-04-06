import { createContext } from "react";
import { LoadingState } from "../../interfaces";

export type LoadingContextProps = {
    loadingState: LoadingState;
    toggle: () => void;
}

export const LoadingContext = createContext<LoadingContextProps>({} as LoadingContextProps);

