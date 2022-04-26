import moment from "jalali-moment";
import "./transactionRow.scss";

export const TransactionRow = ({ ...props }: any) => {  
  
  const handleShowPrice = () => {
    const transactionData = props.transactionData;
    switch (transactionData?.type) {
      case "concurrency_costs":
      case "payments":
      case "misc_expenses":
        return transactionData.amount;

      case "trip_financials":
        return transactionData.final_price;

      default:
        return "-";
    }
  };

  const handleShowType = (): string => {
    switch (props?.transactionData?.type) {
      case "concurrency_costs":
        return "خرید ظرفیت";

      case "payments":
        return "شارژ حساب";

      case "trip_financials":
        return "سفر";

      case "misc_expenses":
        return "متفرقه";

      default:
        return "نامشخص";
    }
  };

  const priceColor = (): string => {
    switch (props?.transactionData?.type) {
      case "concurrency_costs":
      case "trip_financials":
      case "misc_expenses":
        return "withdraw";

      case "payments":
        return "deposit";

      default:
        return "";
    }
  };

  return (
    <div className="transaction-row">
      <div className="transaction-row__type">
        <div className="transaction-row__type__title">{handleShowType()}</div>
        <div className={`transaction-row__type__price ${priceColor()}`}>
          {handleShowPrice()} تومان
        </div>
      </div>

      <div className="transaction-row__date">
        {moment(props?.transactionData?.date, "YYYY/MM/DDTHH:mm:ss")
          .locale("fa")
          .format("HH:mm، YYYY/MM/DD")}
      </div>

      <div className="transaction-row__detail">
        {props?.transactionData?.driver && (
          <div>{props.transactionData.driver}</div>
        )}

        {props?.transactionData?.hub && (
          <div>شعبه: {props.transactionData.hub.title}</div>
        )}

        {props?.transactionData?.title && (
          <div>بابت: {props.transactionData.title}</div>
        )}
      </div>
    </div>
  );
};
