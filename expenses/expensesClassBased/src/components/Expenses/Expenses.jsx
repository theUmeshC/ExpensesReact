import Card from '../UI/Card';
import ExpenseItems from './ExpenseItems';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

import React, { Component } from 'react'

export default class Expenses extends Component {
  state={
    filteredYear: '2021',
  }

  filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    this.setState({filteredYear: selectedYear})
  };
  
  
  
  render() {
     let filteredExpenses = this.props.items.filter(expense => {
      console.log(this.state.filteredYear);
      return expense.date.getFullYear().toString()===this.state.filteredYear
     })
    let setFilteredData = <p>No data found</p>

    if (filteredExpenses.length>0){
      setFilteredData = filteredExpenses.map(expense => <ExpenseItems title={expense.title} amount= {expense.amount} date = {expense.date} key={expense.id} />);
    }
    return (
      <Card className='expenses'>
      
      <ExpenseFilter
       selected={this.state.filteredYear}
       onChangeFilter={this.filterChangeHandler}
     />
     {setFilteredData}

 </Card>
    )
  }
}










