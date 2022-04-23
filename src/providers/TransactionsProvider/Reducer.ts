import { transactionInitialState } from "./InitialState";

export const transactionReducer = (state: {} = transactionInitialState, action: any) => {
    switch (action.type) {
        case 'transaction/update':
            return {
                ...state,
                transaction: action.payload
            };

        case 'transaction/type':
            return {
                ...state,
                type: action.payload
            };

        default:
            return {
                ...state
            };
    }
}