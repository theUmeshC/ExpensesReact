import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItems from './ExpenseItems';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear
  })
  let setFilteredData = <p>No data found</p>
  
  if (filteredExpenses.length>0){
    setFilteredData = filteredExpenses.map(expense => <ExpenseItems title={expense.title} amount= {expense.amount} date = {expense.date} key={expense.id} />);
  }

  return (
    <Card className='expenses'>
      <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {setFilteredData}

    </Card>
  )
}

export default Expenses