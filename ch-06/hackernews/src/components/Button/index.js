import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

const Button = ({ onClick, className = '', children, label }) =>
  <button
    onClick={onClick}
    className={className}>{label}
  </button>

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;