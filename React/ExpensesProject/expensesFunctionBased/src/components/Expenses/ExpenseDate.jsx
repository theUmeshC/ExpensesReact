import React from 'react';
import './ExpenseDate.css';
import PropTypes from 'prop-types';

function ExpenseDate({ date }) {
  const dateProp = new Date(date);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = dateProp.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

ExpenseDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ExpenseDate;
