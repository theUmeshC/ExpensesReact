import Expenses from "./components/Expenses/Expenses";
import NewExpence from "./components/NewExpense/NewExpence";


function App() {
  const expenses = [
    { id : 'e1', title: "car insurence", amount: 297.67, date: new Date(2021, 5, 12) },
    { id : 'e2', title: "car insurence2", amount: "397.67", date: new Date(2021, 6, 12) },
    { id : 'e3', title: "car insurence3", amount: "497.67", date: new Date(2021, 7, 12) }
  ];
  const addExpenseHandler = expense => {
    console.log('..app.js');
    console.log(expense);
  }
  return (
    <div className="app">
      <NewExpence onAddExpense = {addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
