import { useReducer } from "react";
import { useTransaction } from "./useTransaction";
import { TransactionContext } from "../../providers";
import { transactionInitialState } from "../../providers/TransactionsProvider/InitialState";
import { renderHook } from "@testing-library/react";
import { transactionReducer } from "../../providers/TransactionsProvider/Reducer";

const TransactionProvider = ({ children }) => (
    <TransactionContext.Provider value={mockUseContext}>{children}</TransactionContext.Provider>
);

const mockUseContext = jest.fn().mockImplementation(() => {
    const [transactionState, transactionDispatch] = useReducer(
        transactionReducer,
        transactionInitialState
    )
    return { transactionState, transactionDispatch };
});

// useContext() = mockUseContext;

// const { transaction } = useContext(TransactionContext);

describe("useTransaction", () => {
    it("should add expense", () => {
        const { transaction } = renderHook(() => useTransaction(), { TransactionProvider });

        expect(transaction).toMatchObject({});

    });
});
