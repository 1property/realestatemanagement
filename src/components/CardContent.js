import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const CardContent = ({ children }) => {
  return (
    <div className=" flex-column align-items-center w-100">
      {children}
    </div>
  );
};
 
export default CardContent;