import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PropertyEditModal = ({ show, onClose, onSave, property, handleChange }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Property</h5>
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
                  value={property
                    .name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  value={property
                    .price}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="location"
                  className="form-control"
                  id="location"
                  name="location"
                  value={property
                    .location}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="type" className="form-label">
                  Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  name="type"
                  value={property
                    .type}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="size" className="form-label">
                  Size
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="size"
                  name="size"
                  value={property
                    .size}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tenure" className="form-label">
                  Tenure
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tenure"
                  name="tenure"
                  value={property
                    .tenure}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="houseType" className="form-label">
                  House Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="houseType"
                  name="houseType"
                  value={property
                    .houseType}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bedroom" className="form-label">
                  Bedroom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bedroom"
                  name="bedroom"
                  value={property
                    .bedroom}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bathroom" className="form-label">
                  Bathroom
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bathroom"
                  name="bathroom"
                  value={property
                    .bathroom}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="landTitle" className="form-label">
                  Land Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="landTitle"
                  name="landTitle"
                  value={property
                    .landTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={property
                    .description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="notes" className="form-label">
                  Notes
                </label>
                <textarea
                  className="form-control"
                  id="notes"
                  name="notes"
                  value={property
                    .notes}
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