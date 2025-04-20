import { useEffect, useState } from "react";
import Table from "../../components/Table";
import PropertyEditModal from "./PropertyEditModal";
import ConfirmationModal from "../../components/ConfirmationModal";
import { supabase, propertyTable } from "../../clients/supabaseClient";
import "bootstrap/dist/css/bootstrap.min.css";

function ShowProperty() {
    const [property, setProperty] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [currentProperty, setCurrentProperty] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [deleteMessage, setDeleteMessage] = useState("");
    const [editMessage, setEditMessage] = useState("");

    useEffect(() => {
        const fetchProperty = async () => {
            const { data, error } = await supabase.from(propertyTable).select("*");

            if (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
                return;
            }

            setProperty(data);
            setFilteredProperties(data);
            setLoading(false);
        };

        fetchProperty();
    }, []);

    useEffect(() => {
        const filtered = property.filter((property) =>
            Object.values(property).some(
                (value) =>
                    value &&
                    value.toString().toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        setFilteredProperties(filtered);
    }, [searchQuery, property]);

    const handleEdit = (property) => {
        setCurrentProperty(property);
        setShowModal(true);
    };

    const handleDelete = (property) => {
        setCurrentProperty(property);
        setShowConfirmationModal(true);
    };

    const confirmDelete = async () => {
        if (!currentProperty || !currentProperty.id) {
            console.error("Invalid property ID");
            setShowConfirmationModal(false);
            return;
        }

        const { error } = await supabase
            .from(propertyTable)
            .delete()
            .eq("id", currentProperty.id);

        if (error) {
            console.error("Error deleting data:", error);
            setShowConfirmationModal(false);
            return;
        }

        setProperty(
            property.filter((property) => property.id !== currentProperty.id)
        );
        setShowConfirmationModal(false);
        setDeleteMessage(`Property ${currentProperty.name} has been deleted.`);
        setTimeout(() => setDeleteMessage(""), 5000); // Clear the message after 5 seconds
    };

    const handleChange = (e) => {
        setCurrentProperty({ ...currentProperty, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        if (!currentProperty || !currentProperty.id) {
            console.error("Invalid property ID");
            return;
        }

        const { error } = await supabase
            .from(propertyTable)
            .update(currentProperty)
            .eq("id", currentProperty.id);

        if (error) {
            console.error("Error updating data:", error);
            return;
        }

        setProperty(
            property.map((property) =>
                property.id === currentProperty.id ? currentProperty : property
            )
        );
        setShowModal(false);
        setEditMessage(`Property ${currentProperty.name} has been edited.`);
        setTimeout(() => setEditMessage(""), 5000); // Clear the message after 5 seconds
    };

    const headers = [
        { title: "Name", key: "name" },
        { title: "Price", key: "price" },
        { title: "Location", key: "location" },
        { title: "Type", key: "type" },
        { title: "Size", key: "size" },
        { title: "Tenure", key: "tenure" },
        { title: "House Type", key: "houseType" },
        { title: "Bedroom", key: "bedroom" },
        { title: "Bathroom", key: "bathroom" },
        { title: "Land Title", key: "landTitle" },
        { title: "Description", key: "description" },
        { title: "Notes", key: "notes" }
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
            <PropertyEditModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onSave={handleSave}
                property={currentProperty}
                handleChange={handleChange}
            />
            <ConfirmationModal
                show={showConfirmationModal}
                onClose={() => setShowConfirmationModal(false)}
                onConfirm={confirmDelete}
                message={`Are you sure you want to delete the property ${currentProperty?.name}?`}
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

export default ShowProperty;