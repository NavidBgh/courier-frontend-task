import React, { useEffect, useMemo, useState } from "react";
import { Container } from "../components/Container";
import { TransactionHeader } from "../components/TransactionHeader";
import { TransactionRow } from "../components/TransactionRow";
import { TransactionToolbar } from "../components/TransactionToolbar";
import { transactionData } from "../utils/data";
import { filterTransactions, getAllTransactionData } from "../utils/functions";

import "react-virtualized/styles.css";
import { List } from "react-virtualized";

export const Transactions = () => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [transactions, setTransactions] = useState<any[]>([]);
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
    setTransactions(res);

    console.log(res);
    console.log(filterTransactions(res, "trip_financials"));
  }, []);

  const searchHandler = useMemo(() => {
    const result = transactions.map((element: any) =>
      element.transactions?.filter((el: any) =>
        el.driver?.includes(searchInputValue)
      )
    );
    console.log(result);
  }, [searchInputValue]);

  return (
    <Container>
      <TransactionToolbar />
      {transactions?.map((transactionsList) => (
        <React.Fragment>
          <TransactionHeader date={transactionsList.date} />
          <div>
            {transactionsList.transactions.map((transaction: any) => (
              <TransactionRow transactionData={transaction} />
            ))}
          </div>
        </React.Fragment>
      ))}
    </Container>
  );
};
