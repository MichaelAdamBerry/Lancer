import React from "react";

export default function ClientsView({ renderClients, renderModal }) {
  return (
    <div className="container siteText">
      {renderModal()}
      <div className="row">
        <div className="col content shadow">
          <h5 className="tableHeading">Clients</h5>
          <table className="table table-sm">
            <caption>List of Users</caption>
            <thead>
              <tr>
                <th scope="col">Client</th>
                <th scope="col">Main Contact</th>
                <th scope="col">Phone</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>{renderClients()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
