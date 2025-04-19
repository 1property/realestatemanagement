import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = ({ type = 'button', label, onClick }) => {
  return (
    <button
      type={type}
      className="btn btn-primary my-2"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;