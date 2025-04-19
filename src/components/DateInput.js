import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 
const DateInput = ({ name, value, onChange, className }) => {
  return (
    <input
      type="date"
      className={`form-control my-2 ${className}`}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
 
export default DateInput;