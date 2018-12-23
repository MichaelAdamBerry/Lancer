import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";

export default function MyExpensesView({ expenses, handleRemove }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col content shadow">
          <h5 className="tableHeading">My Expenses</h5>
          <Table hover striped>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Description</th>
              </tr>
              {expenses.map(i => {
                return (
                  <tr key={`${i}${i.id}`}>
                    <td>{i.price}</td>
                    <td>{i.description}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          handleRemove(i.id);
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

MyExpensesView.propTypes = {
  expenses: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired
};
