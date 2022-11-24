/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpenseItems from './ExpenseItems';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);
  let setFilteredData = <p>No data found</p>;

  if (filteredExpenses.length > 0) {
    setFilteredData = filteredExpenses.map((expense) => <ExpenseItems title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {setFilteredData}

    </Card>
  );
}

Expenses.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default Expenses;
