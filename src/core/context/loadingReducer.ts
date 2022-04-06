import { LoadingState } from '../../interfaces/LoadingState';


type TodoAction =
    | { type: 'toggle' }

export const loadingReducer = (state: LoadingState, action: TodoAction): LoadingState => {

    switch (action.type) {
        case 'toggle':
            return {
                ...state,
                loading: !state.loading
            };
        default:
            return state;
    }
}