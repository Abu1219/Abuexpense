import "./App.css";
import { Balance } from "./Components/Balance";
import { Header } from "./Components/Header";
import { IncomeExpenses } from "./Components/IncomeExpenses";
import { TransactionLists } from "./Components/TransactionLists";
import { AddTransactionLists } from "./Components/AddTransactionLists";
import { GlobalContextProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionLists />
        <AddTransactionLists />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
