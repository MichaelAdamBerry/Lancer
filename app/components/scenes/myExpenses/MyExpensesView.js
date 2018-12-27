import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";

const Expense = ({ price, description, handleRemove, id }) => {
  return (
    <tr>
      <td>{price}</td>
      <td>{description}</td>
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
              {expenses.map(expense => {
                return <Expense {...expense} handleRemove={handleRemove} />;
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
