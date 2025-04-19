import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 
const PropertyEditModal = ({ show, onClose, onSave, lead, handleChange }) => {
  if (!show) {
    return null;
  }
 
  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Lead</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={lead.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={lead.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={lead.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  value={lead.location}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="property" className="form-label">
                  Property
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="property"
                  name="property"
                  value={lead.property}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="source" className="form-label">
                  Source
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="source"
                  name="source"
                  value={lead.source}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="followUp" className="form-label">
                  Follow-Up
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="followUp"
                  name="followUp"
                  value={lead.followUp}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  name="status"
                  value={lead.status}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="notes" className="form-label">
                  Notes
                </label>
                <textarea
                  className="form-control"
                  id="notes"
                  name="notes"
                  value={lead.notes}
                  onChange={handleChange}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={onSave}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default PropertyEditModal;