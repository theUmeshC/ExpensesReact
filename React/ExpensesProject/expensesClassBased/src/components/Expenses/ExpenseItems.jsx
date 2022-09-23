import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import React, { Component } from 'react'

export default class ExpenseItems extends Component {
  
  state={
    title : this.props.title,
    amount : this.props.amount,
    date : this.props.date
  }
  
  render() {
    return (
      <Card className="expense-item">
      <div>
        <ExpenseDate date={this.state.date} />
      </div>
      <div className="expense-item__description">
        <h2>{this.state.title}</h2>
      </div>
      <div className="expense-item__price">{this.state.amount}</div>
    </Card>
    )
  }
}
   
