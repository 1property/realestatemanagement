import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 
const Link = ({ to, label }) => {
  return (
    <RouterLink className="btn btn-link" to={to}>
      {label}
    </RouterLink>
  );
};
 
export default Link;