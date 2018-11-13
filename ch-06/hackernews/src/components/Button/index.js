import React from 'react';

const Button = ({ onClick, className = '', children, label }) =>
  <button
    onClick={onClick}
    className={className}>{label}
  </button>

export default Button;