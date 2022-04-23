import "./transactionHeader.scss";
import moment from "jalali-moment";

export const TransactionHeader = ({ ...props }) => {
  return (
    <div className="transaction-header">
      {moment(props.date, "YYYY-MM-DD").locale("fa").format("dddd DD MMMM YYYY")}
    </div>
  );
};
