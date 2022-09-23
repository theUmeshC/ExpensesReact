import Expenses from "./components/Expenses/Expenses";
import NewExpence from "./components/NewExpense/NewExpence";
import React, { Component } from "react";

const Dummy_EXPENSES = [
  {
    id: "e1",
    title: "car insurence",
    amount: 297.67,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e2",
    title: "car insurence2",
    amount: "397.67",
    date: new Date(2021, 6, 12),
  },
  {
    id: "e3",
    title: "car insurence3",
    amount: "497.67",
    date: new Date(2021, 7, 12),
  },
];

export default class App extends Component {
  constructor() {
    super();
    this.state={
      expenses: Dummy_EXPENSES,
    };
  }

  addExpenseHandler = (expense) => {
    this.setState({expenses : [expense, ...this.state.expenses]});
  };

  render() {
    return (
      <div className="app">
        <NewExpence onAddExpense={this.addExpenseHandler} />
        <Expenses items={this.state.expenses} />
      </div>
    );
  }
}
