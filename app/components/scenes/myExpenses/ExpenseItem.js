import React from "react";
import { removeExpense } from "../../../actions/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

class ExpenseItem extends React.Component {
  handleRemove = expenseID => {
    const { removeExpense } = this.props;
    removeExpense(expenseID);
  };
  handleEdit = expenseID => {
    console.log("Edit Icon clicked");
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
            onClick={() => {
              this.handleRemove(expense.id);
            }}
            className="btn btn-danger">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </td>
        <td>
          <button
            type="button"
            onClick={() => {
              this.handleEdit(expense.id);
            }}
            className="btn btn-secondary">
            <FontAwesomeIcon icon={faEdit} />
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
