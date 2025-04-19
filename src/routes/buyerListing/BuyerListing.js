import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase, buyerListingTable } from "../../clients/supabaseClient";
import "bootstrap/dist/css/bootstrap.min.css";
 
function BuyerListing() {
  const [buyerListings, setBuyerListing] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchProperties = async () => {
      const { data, error } = await supabase.from(buyerListingTable).select("*");
 
      if (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        return;
      }
 
      setBuyerListing(data);
      setLoading(false);
    };
 
    fetchProperties();
  }, []);
 
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Buyer Listing Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Total Buyer Listing: {buyerListings.length}</h5>
          </div>
        </div>
      )}
      <Link to="/addBuyerListing" className="btn btn-primary mx-2">
        Add Buyer Listing
      </Link>
      <Link to="/showBuyerListing" className="btn btn-secondary mx-2">
        Show Buyer Listing
      </Link>
    </div>
  );
}
 
export default BuyerListing;