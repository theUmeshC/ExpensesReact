
import "./ExpenseDate.css";
import React, { Component } from "react";

export default class ExpenseDate extends Component {
  month = this.props.date.toLocaleString("en-US", { month: "long" });
  day = this.props.date.toLocaleString("en-US", { day: "2-digit" });
  year = this.props.date.getFullYear();
  render() {
    return (
      <div className="expense-date">
        <div className="expense-date__month">{this.month}</div>
        <div className="expense-date__year">{this.year}</div>
        <div className="expense-date__day">{this.day}</div>
      </div>
    );
  }
}
