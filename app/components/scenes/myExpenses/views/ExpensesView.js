import React from "react";
import PropTypes from "prop-types";

export default function ExpensesView({ renderEditModal, renderExpenses }) {
  return (
    <div className="container siteText">
      {renderEditModal()}
      <div className="row">
        <div className="col content shadow">
          <h5 className="tableHeading">My Expenses</h5>
          <table className="table table-sm">
            <caption>List of Expenses</caption>
            <thead>
              <tr>
                <th scope="col">Client</th>
                <th scope="col">Amount</th>
                <th scope="col">Description</th>
                <th scope="col" />
              </tr>
              <tr>
                <td colSpan="5">
                  <small>
                    Select a client to see only expenses from that client
                  </small>
                </td>
              </tr>
            </thead>
            <tbody>
              {renderExpenses()}
              <tr />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
