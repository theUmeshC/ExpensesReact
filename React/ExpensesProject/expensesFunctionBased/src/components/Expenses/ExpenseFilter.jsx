import React from 'react';
import './ExpenseFilter.css';
import PropTypes from 'prop-types';

function ExpenseFilter({ onChangeFilter, selected }) {
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (

    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="filter">
          Filter by year
          <select value={selected} id="filter" onChange={dropdownChangeHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </label>
      </div>
    </div>
  );
}

ExpenseFilter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default ExpenseFilter;
