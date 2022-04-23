import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../../providers/TransactionsProvider";
import { transactionData } from "../../utils/data";
import {
  filterTransactions,
  getAllTransactionData,
} from "../../utils/functions";

export const useTransaction = () => {
  const { transactionState, transactionDispatch } =
    useContext(TransactionContext);
  const [allTransactions, setAllTransactions] = useState<any[]>([]);

  useEffect(() => {
    const data: any[] = [];
    transactionData.concurrency_costs.forEach((element) => {
      data.push({
        ...element,
        date: element.created_at,
        type: "concurrency_costs",
      });
    });
    transactionData.misc_expenses.forEach((element) => {
      data.push({
        ...element,
        date: element.created_at,
        type: "misc_expenses",
      });
    });
    transactionData.payments.forEach((element) => {
      data.push({ ...element, date: element.datetime, type: "payments" });
    });
    transactionData.trip_financials.forEach((element) => {
      data.push({
        ...element,
        date: element.request_datetime,
        type: "trip_financials",
      });
    });

    const res = getAllTransactionData(data);
    setAllTransactions(res);
    transactionDispatch({ type: "transaction/update", payload: res });
    // eslint-disable-next-line
  }, []);
  
  const searchHandler = (value: string) => {
    const res = filterTransactions(
      allTransactions,
      'search',
      value
    );
    
    transactionDispatch({
      type: "transaction/update",
      payload: res,
    });
  };

  const filterHandler = (filterType: string) => {
    transactionDispatch({
      type: "transaction/type",
      payload: filterType,
    });

    if (filterType === "all") {
      transactionDispatch({
        type: "transaction/update",
        payload: allTransactions,
      });
      return;
    }

    transactionDispatch({
      type: "transaction/update",
      payload: filterTransactions(allTransactions, filterType),
    });
  };

  return {
    filter: (type: string) => filterHandler(type),
    search: (searchValue: string) => searchHandler(searchValue),
    transaction: transactionState.transaction,
    filterType: transactionState.type,
  };
};
