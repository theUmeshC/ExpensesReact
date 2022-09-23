import ExpenceForm from "./ExpenceForm";
import "./NewExpence.css";
import React, { Component } from 'react';

export default class NewExpence extends Component {
  saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.random() * 10).toString(),
    };
    this.props.onAddExpense(expenseData);
  };
  render() {
    return (
      <div className="new-expense">
      <ExpenceForm onSaveExpenseData={this.saveExpenseDataHandler} />
    </div>
    )
  }
}
