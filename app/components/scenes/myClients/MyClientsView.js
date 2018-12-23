import React from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";

export default function MyClientsView({ clients, handleRemove }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col content shadow">
          <h5 className="tableHeading">Clients</h5>
          <Table hover striped>
            <thead>
              <tr>
                <th>Client</th>
                <th>Main Contact</th>
                <th>phone</th>
              </tr>
              {clients.map(client => {
                return (
                  <tr key={client.id}>
                    <td>{client.clientName}</td>
                    <td>{client.contactName}</td>
                    <td>{client.phone}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          handleRemove(client.id);
                        }}
                        className="btn btn-small btn-danger">
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </thead>
          </Table>
        </div>
      </div>
    </div>
  );
}

MyClientsView.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  clients: PropTypes.array.isRequired
};
