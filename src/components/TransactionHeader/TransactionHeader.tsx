import "./transactionHeader.scss";
import moment from "jalali-moment";

export const TransactionHeader = ({ ...props }: any) => {
  return (
    <div className="transaction-header">
      {moment(props.date, "YYYY-MM-DD")
        .locale("fa")
        .format("dddd DD MMMM YYYY")}
    </div>
  );
};
