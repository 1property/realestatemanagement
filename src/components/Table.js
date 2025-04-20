import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Table = ({ headers, data, onEdit, onDelete }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header.title}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => (
              <td key={colIndex}>
                {row[header.key]}
              </td>
            ))}
            <td>
              <button className="btn btn-link" onClick={() => onEdit(row)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                className="btn btn-link text-danger"
                onClick={() => onDelete(row)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;