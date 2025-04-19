import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 
const Input = ({ name, placeholder, value, onChange, className }) => {
  return (
    <input
      type="text"
      className={`form-control my-2 ${className}`}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
 
export default Input;