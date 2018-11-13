import React from 'react';
import './index.css';

const Button = ({ onClick, className = '', children, label }) =>
  <button
    onClick={onClick}
    className={className}>{label}
  </button>

export default Button;