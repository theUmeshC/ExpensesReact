import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const Dummy_EXPENSES = [
  { id : 'e1', title: "car insurance", amount: 297.67, date: new Date(2021, 5, 12) },
  { id : 'e2', title: "car insurance2", amount: "397.67", date: new Date(2021, 6, 12) },
  { id : 'e3', title: "car insurance3", amount: "497.67", date: new Date(2021, 7, 12) }
];
function App() {
  const [expenses, setExpenses] = useState(Dummy_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="app">
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
