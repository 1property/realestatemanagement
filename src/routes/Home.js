import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 
const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Real Estate Management!</h1>
        <p className="lead">
          This is a simple application to manage your real estate
          efficiently.
        </p>
        <hr className="my-4" />
        <p>Use the buttons below to navigate yourselves.</p>
        <div className="d-flex justify-content-center">
          <Link to="/buyerListing" className="btn btn-primary btn-lg mx-2">
            Buyer Listing
          </Link>
          <Link to="/properties" className="btn btn-secondary btn-lg mx-2">
            Properties
          </Link>
        </div>
      </div>
    </div>
  );
};
 
export default Home;