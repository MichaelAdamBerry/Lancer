import React from "react";
import { Alert } from "reactstrap";

export default function ClientAlert(props) {
  const { alertOpen, toggle, clientObj, handleRemove } = props;
  return (
    <tr>
      <td colSpan="5">
        <Alert color="danger" isOpen={alertOpen} toggle={toggle}>
          <h5 className="alert-heading">Are you sure?</h5>
          <p>
            Removing a client will delete all data associated with{" "}
            {clientObj.clientName}, including all job, expense and payment data.
          </p>
          <button
            className="btn btn-outline-danger"
            onClick={() => handleRemove(clientObj.id)}>
            Remove Client
          </button>
          <button className="btn btn-outline-success" onClick={toggle}>
            Nevermind
          </button>
        </Alert>
      </td>
    </tr>
  );
}
