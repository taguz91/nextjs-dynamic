import { useReducer } from 'react';
import { LoadingState } from '../../interfaces/LoadingState';
import { loadingReducer } from './loadingReducer';
import { LoadingContext } from './LoadingContext';

const INITIAL_STATE: LoadingState = {
    loading: false,
}


interface Props {
    children: JSX.Element | JSX.Element[]
}

export const LoadingProvider = ({ children }: Props) => {
    const [loadingState, dispatch] = useReducer(loadingReducer, INITIAL_STATE);

    const toogle = (): void => {
        dispatch({ type: 'toggle' });
    }

    return (
        <LoadingContext.Provider value={{
            loadingState,
            toggle: toogle
        }}>
            {children}
        </LoadingContext.Provider>
    );
}