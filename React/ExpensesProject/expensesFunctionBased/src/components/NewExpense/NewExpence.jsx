import React from "react";
import ExpenceForm from "./ExpenceForm";
import "./NewExpence.css";

const NewExpence = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.random() * 10).toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenceForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpence;
