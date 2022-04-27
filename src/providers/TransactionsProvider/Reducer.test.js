import { transactionInitialState } from "./InitialState";
import { transactionReducer } from "./Reducer";

describe('transactionReducer', () => {

    it('should return new transactions when action is update', () => {
        const resultState = transactionReducer(transactionInitialState, { type: 'transaction/update', payload: [{ id: 1, title: 'تراکنش تست' }] });

        expect(resultState).toMatchObject({ ...transactionInitialState, transaction: [{ id: 1, title: 'تراکنش تست' }] });
    });

    it('should return new transactions when action is type', () => {
        const resultState = transactionReducer(transactionInitialState, { type: 'transaction/type', payload: 'payments' });

        expect(resultState).toMatchObject({ ...transactionInitialState, type: 'payments' });
    });

});


