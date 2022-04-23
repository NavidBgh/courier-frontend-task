import React from "react";
import { Container } from "../components/Container";
import { TransactionHeader } from "../components/TransactionHeader";
import { TransactionRow } from "../components/TransactionRow";
import { TransactionToolbar } from "../components/TransactionToolbar";
import { useTransaction } from "../hooks/useTransaction";

export const Transactions = () => {
  const { transaction }: any = useTransaction();

  return (
    <Container>
      <TransactionToolbar />
      {transaction?.length === 0 && "داده‌ای یافت نشد"}
      {transaction?.map((transactionsList: any) => (
        <React.Fragment>
          <TransactionHeader date={transactionsList.date} />
          <div>
            {transactionsList.transactions.map((transaction: {}) => (
              <TransactionRow transactionData={transaction} />
            ))}
          </div>
        </React.Fragment>
      ))}
    </Container>
  );
};
