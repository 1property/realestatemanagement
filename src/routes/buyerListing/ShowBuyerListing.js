import { useEffect, useState } from "react";
import Table from "../../components/Table";
import Modal from "./BuyerListingEditModal";
import ConfirmationModal from "../../components/ConfirmationModal";
import { supabase, buyerListingTable } from "../../clients/supabaseClient";
import "bootstrap/dist/css/bootstrap.min.css";

function ShowBuyerListing() {
  const [buyerListings, setBuyerListing] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [currentBuyerListing, setCurrentBuyerListing] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [editMessage, setEditMessage] = useState("");

  useEffect(() => {
    const fetchBuyerListing = async () => {
      const { data, error } = await supabase.from(buyerListingTable).select("*");

      console.log(data);

      if (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
        return;
      }

      setBuyerListing(data);
      setFilteredProperties(data);
      setLoading(false);
    };

    fetchBuyerListing();
  }, []);

  useEffect(() => {
    const filtered = buyerListings.filter((property) =>
      Object.values(property).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredProperties(filtered);
  }, [searchQuery, buyerListings]);

  const handleEdit = (property) => {
    setCurrentBuyerListing(property);
    setShowModal(true);
  };

  const handleDelete = (property) => {
    setCurrentBuyerListing(property);
    setShowConfirmationModal(true);
  };

  const confirmDelete = async () => {
    if (!currentBuyerListing || !currentBuyerListing.id) {
      console.error("Invalid buyer listing ID");
      setShowConfirmationModal(false);
      return;
    }

    const { error } = await supabase
      .from(buyerListingTable)
      .delete()
      .eq("id", currentBuyerListing.id);

    if (error) {
      console.error("Error deleting data:", error);
      setShowConfirmationModal(false);
      return;
    }

    setBuyerListing(
      buyerListings.filter((property) => property.id !== currentBuyerListing.id)
    );
    setShowConfirmationModal(false);
    setDeleteMessage(`Property ${currentBuyerListing.name} has been deleted.`);
    setTimeout(() => setDeleteMessage(""), 5000); // Clear the message after 5 seconds
  };

  const handleChange = (e) => {
    setCurrentBuyerListing({ ...currentBuyerListing, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!currentBuyerListing || !currentBuyerListing.id) {
      console.error("Invalid property ID");
      return;
    }

    const { error } = await supabase
      .from(buyerListingTable)
      .update(currentBuyerListing)
      .eq("id", currentBuyerListing.id);

    if (error) {
      console.error("Error updating data:", error);
      return;
    }

    setBuyerListing(
      buyerListings.map((property) =>
        property.id === currentBuyerListing.id ? currentBuyerListing : property
      )
    );
    setShowModal(false);
    setEditMessage(`Buyer Listing ${currentBuyerListing.name} has been edited.`);
    setTimeout(() => setEditMessage(""), 5000); // Clear the message after 5 seconds
  };

  const headers = [
    {title: "Name", key: "name"},
    {title: "Phone", key: "phone"},
    {title: "Email", key: "email"},
    {title: "Location", key: "location"},
    {title: "Property", key: "property"},
    {title: "Source", key: "source"},
    {title: "Follow-Up", key: "followUp"},
    {title: "Status", key: "status"},
    {title: "Notes", key: "notes"}
  ];

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Properties</h2>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search properties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table
          headers={headers}
          data={filteredProperties}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        lead={currentBuyerListing}
        handleChange={handleChange}
      />
      <ConfirmationModal
        show={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        onConfirm={confirmDelete}
        message={`Are you sure you want to delete the property ${currentBuyerListing?.name}?`}
      />
      {deleteMessage && (
        <div className="alert alert-success mt-4">{deleteMessage}</div>
      )}
      {editMessage && (
        <div className="alert alert-success mt-4">{editMessage}</div>
      )}
    </div>
  );
}

export default ShowBuyerListing;