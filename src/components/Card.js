import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const Card = ({ children }) => {
  return (
    <div className="card mx-auto" style={{ width: '100%' }}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};
 
export default Card;