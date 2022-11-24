import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

function Card({ className, children }) {
  const classes = `card ${className}`;
  return (
    <div className={classes}>{children}</div>
  );
}

Card.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Card;
