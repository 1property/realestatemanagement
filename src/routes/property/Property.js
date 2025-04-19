import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase, propertyTable } from "../../clients/supabaseClient";
import "bootstrap/dist/css/bootstrap.min.css";
 
function Property() {
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchProperties = async () => {
      const { data, error } = await supabase.from(propertyTable).select("*");
 
      if (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        return;
      }
 
      setProperty(data);
      setLoading(false);
    };
 
    fetchProperties();
  }, []);
 
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Properties Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Total Properties: {property.length}</h5>
          </div>
        </div>
      )}
      <Link to="/addProperties" className="btn btn-primary mx-2">
        Add Properties
      </Link>
      <Link to="/showProperties" className="btn btn-secondary mx-2">
        Show Properties
      </Link>
    </div>
  );
}
 
export default Property;