import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const Textarea = ({ name, placeholder, value, onChange }) => {
  return (
    <textarea
      className="form-control my-2"
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows="4"
    />
  );
};
 
export default Textarea;