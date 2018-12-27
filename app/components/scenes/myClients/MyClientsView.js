import React from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";

const Client = ({ clientName, contactName, phone, id, handleRemove }) => {
  return (
    <tr>
      <td>{clientName}</td>
      <td>{contactName}</td>
      <td>{phone}</td>
      <td>
        <button
          type="button"
          onClick={() => {
            handleRemove(id);
          }}
          className="btn btn-small btn-danger">
          Remove
        </button>
      </td>
    </tr>
  );
};

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
                  <Client
                    {...client}
                    key={client.id}
                    handleRemove={handleRemove}
                  />
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
