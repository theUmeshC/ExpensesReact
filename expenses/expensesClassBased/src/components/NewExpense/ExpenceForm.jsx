import './ExpenceForm.css';
import React, { Component } from 'react'

export default class ExpenceForm extends Component {

    state = {
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : ''
    }
    titleChangeHandler=(e) => {
        this.setState(this.enteredTitle = e.target.value )
    }
    amountChangeHandler=(e) => {
        this.setState(this.enteredAmount = e.target.value )
    }
    dateChangeHandler=(e) => {
        this.setState(this.enteredDate = e.target.value )
    }
    submitHandler = (e) => {
        e.preventDefault();
        const enteredNewExpense = {
            title : this.enteredTitle,
            amount : this.enteredAmount,
            date : new Date(this.enteredDate)
        };
        this.props.onSaveExpenseData(enteredNewExpense);
        this.setState(this.enteredTitle = '' );
        this.setState(this.enteredAmount ='' );
        this.setState(this.enteredDate = '' );       
    }
  render() {
    return (
        <form onSubmit={this.submitHandler} >
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={this.enteredTitle} onChange={this.titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' value={this.enteredAmount} onChange={this.amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>date</label>
                <input type="date" min='2019-01-01' max='2022-12-31' value={this.enteredDate} onChange={this.dateChangeHandler}/>
            </div>
            <div className="new-expence__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
    )
  }
}