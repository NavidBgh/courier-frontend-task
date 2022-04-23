import { useEffect, useState } from "react";
import { useTransaction } from "../../hooks";
import "./transactionToolbar.scss";

export const TransactionToolbar = () => {
  const { filter, filterType, search } = useTransaction();
  const [searchInputValue, setSearchInputValue] = useState("");

  const searchHandler = (value: string) => {
    search(value);
  };

  useEffect(() => {
    if (filterType === "trip_financials") setSearchInputValue("");
  }, [filterType]);

  return (
    <div className="transaction-toolbar">
      <div>لیست تراکنش‌ها</div>
      <div>
        {filterType === "trip_financials" && (
          <input
            type="text"
            value={searchInputValue}
            placeholder="جستجوی نام راننده"
            onChange={(e) => {
              searchHandler(e.target.value);
              setSearchInputValue(e.target.value);
            }}
          />
        )}

        <select onChange={(e: any) => filter(e.target.value)}>
          <option value="all">همه</option>
          <option value="concurrency_costs">خرید ظرفیت</option>
          <option value="payments">شارژ حساب</option>
          <option value="trip_financials">سفر</option>
          <option value="misc_expenses">متفرقه</option>
        </select>
      </div>
    </div>
  );
};
