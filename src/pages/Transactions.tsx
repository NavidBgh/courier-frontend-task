import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import { Container } from "../components/Container";
import { TransactionHeader } from "../components/TransactionHeader";
import { TransactionRow } from "../components/TransactionRow";
import { TransactionToolbar } from "../components/TransactionToolbar";
import { useTransaction } from "../hooks/useTransaction";

export const Transactions = () => {
  const { transaction }: any = useTransaction();

  const Row = ({ index }: any) => {
    return (
      <div>
        {transaction[index]?.type === "date" ? (
          <TransactionHeader {...transaction[index]} />
        ) : (
          <TransactionRow transactionData={transaction[index]} />
        )}
      </div>
    );
  };

  return (
    <Container>
      <TransactionToolbar />
      {transaction?.length === 0 ? (
        "داده‌ای یافت نشد"
      ) : (
        <AutoSizer>
          {({ height, width }) => (
            <List
              direction="rtl"
              height={height}
              itemCount={transaction.length}
              itemSize={105}
              width={width}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      )}

      {/* {transaction?.map((transactionsList: any, index: number) => (
        <React.Fragment key={index}>
          <TransactionHeader date={transactionsList.date} />
           <div>
            {transactionsList.transactions.map((transaction: {}) => (
              <TransactionRow transactionData={transaction} />
            ))}
          </div> 
        </React.Fragment>
      ))} */}
    </Container>
  );
};
