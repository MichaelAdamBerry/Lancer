import React from "react";
import { removeExpense } from "../../../actions/actions";
import { connect } from "react-redux";

class ExpenseItem extends React.Component {
  handleRemove = expenseID => {
    const { removeExpense } = this.props;
    removeExpense(expenseID);
  };
  render() {
    const { expense } = this.props;
    return (
      <tr>
        <td>{expense.price}</td>
        <td>{expense.description}</td>
        <td>
          <button
            type="button"
            className="btn btn-small btn-danger"
            onClick={() => this.handleRemove(expense.id)}>
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(
  null,
  { removeExpense }
)(ExpenseItem);
