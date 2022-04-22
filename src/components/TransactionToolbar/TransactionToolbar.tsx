import "./transactionToolbar.scss";

export const TransactionToolbar = () => {
  return (
    <div className="transaction-toolbar">
      <div>لیست تراکنش‌ها</div>
      <div>
        {/* <input
          type="text"
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
        /> */}
        <select onChange={(e: any) => console.log(e.target.value)}>
          <option value="">همه</option>
          <option value="concurrency_costs">خرید ظرفیت</option>
          <option value="payments">شارژ حساب</option>
          <option value="trip_financials">سفر</option>
          <option value="misc_expenses">متفرقه</option>
        </select>
      </div>
    </div>
  );
};
