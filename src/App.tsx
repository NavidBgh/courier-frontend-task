import { Transactions } from "./pages";
import { TransactionProvider } from "./providers/TransactionsProvider";

const App = () => {
  return (
    <TransactionProvider>
      <Transactions />
    </TransactionProvider>
  );
};

export default App;
