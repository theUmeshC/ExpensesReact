import React from 'react';
import './ExpenseItem.css';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItems({ title, amount, date }) {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{amount}</div>
    </Card>
  );
}

ExpenseItems.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ExpenseItems;
