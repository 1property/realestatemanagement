import { Routes, Route } from "react-router-dom";

import Home from "../routes/Home";
import AddBuyerListing from "../routes/buyerListing/AddBuyerListing";
import ShowBuyerListing from "../routes/buyerListing/ShowBuyerListing";
import BuyerListing from "../routes/buyerListing/BuyerListing";
import AddProperty from "../routes/property/AddProperty";
import Property from "../routes/property/Property";
import ShowProperty from "../routes/property/ShowProperty";


const Layout = () => {
  return (
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="buyerListing" element={<BuyerListing />} />
        <Route path="addBuyerListing" element={<AddBuyerListing />} />
        <Route path="showBuyerListing" element={<ShowBuyerListing />} />
        <Route path="properties" element={<Property />} />
        <Route path="addProperties" element={<AddProperty />} />
        <Route path="showProperties" element={<ShowProperty />} />
      </Routes>
    </div>
  );
};

export default Layout;