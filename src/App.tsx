import { Transactions } from "./pages/Transactions";
import { TransactionProvider } from "./providers/TransactionsProvider";

const App = () => {
  return (
    <TransactionProvider>
      <Transactions />
    </TransactionProvider>
  );
};

export default App;
