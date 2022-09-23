import './ExpenseFilter.css'
import React, { Component } from 'react'

export default class ExpenseFilter extends Component {
   dropdownChangeHandler = (event) => {
    this.props.onChangeFilter(event.target.value);
  };
  render() {
    return (
      <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={this.props.selected} onChange={this.dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
    )
  }
}









