import React, { createContext, useReducer } from "react";
import { transactionInitialState } from "./InitialState";
import { transactionReducer } from "./Reducer";

export const TransactionContext = createContext<any>([]);

export const TransactionProvider = ({ children }: any) => {
  const [transactionState, transactionDispatch] = useReducer(
    transactionReducer,
    transactionInitialState
  );

  return (
    <TransactionContext.Provider
      value={{ transactionState, transactionDispatch }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
