import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";

const ExpenseItem = ({ expense }) => {
  return (
    <tr>
      <td>{expense.price}</td>
      <td>{expense.description}</td>
      <td>
        <button type="button" className="btn btn-small btn-danger">
          Remove
        </button>
      </td>
    </tr>
  );
};

const RenderExpenses = ({ expenses }) => {
  const expenseArr = _.map(expenses, (value, key) => {
    return <ExpenseItem key={key} expense={value} />;
  });
  if (!_.isEmpty(expenseArr)) {
    return expenseArr;
  }
  return (
    <tr>
      <td>You have no expenses added yet</td>
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
              {<RenderExpenses expenses={expenses} />}
            </thead>
          </Table>
        </div>
      </div>
    </div>
  );
}
