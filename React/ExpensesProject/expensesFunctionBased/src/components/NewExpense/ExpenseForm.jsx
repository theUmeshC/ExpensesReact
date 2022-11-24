import './ExpenseForm.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ExpenseForm({ onSaveExpenseData }) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredNewExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(enteredNewExpense);
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="text_input">
            Title
            <input type="text" id="text_input" value={enteredTitle} onChange={titleChangeHandler} />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount_input">
            Amount
            <input type="number" min="0.01" step="0.01" value={enteredAmount} id="amount_input" onChange={amountChangeHandler} />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date_input">
            date
            <input type="date" min="2019-01-01" max="2022-12-31" id="date_input" value={enteredDate} onChange={dateChangeHandler} />
          </label>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

ExpenseForm.propTypes = {
  onSaveExpenseData: PropTypes.func.isRequired,
};

export default ExpenseForm;
