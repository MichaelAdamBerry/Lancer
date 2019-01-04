import React from "react";
import * as actions from "../../../actions/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

class ExpenseItem extends React.Component {
  static propTypes = {
    updateCurrentExpense: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    expense: PropTypes.shape({
      price: PropTypes.string,
      description: PropTypes.string,
      client: PropTypes.string,
      id: PropTypes.string,
      clientObj: PropTypes.object
    })
  };
  handleRemove = expenseID => {
    const { removeExpense } = this.props;
    removeExpense(expenseID);
  };

  onClientClick = client => {
    this.props.updateSelectedClient(client);
    this.props.toggleFilterExpenses();
  };

  onEditClick = expenseObj => {
    this.props.updateCurrentExpense(expenseObj);
    this.props.toggle();
  };

  render() {
    const { expense } = this.props;
    return (
      <tr>
        <td
          onClick={() => this.onClientClick(expense.client)}
          style={{ cursor: "pointer" }}>
          {expense.client}
        </td>
        <td>{expense.price}</td>
        <td>{expense.description}</td>

        <td>
          <div className="tableIcons">
            <span
              className="editIcon"
              onClick={() => {
                this.onEditClick(expense);
              }}>
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span
              className="deleteIcon"
              onClick={() => {
                this.handleRemove(expense.id);
              }}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </div>
        </td>
      </tr>
    );
  }
}

export default connect(
  null,
  actions
)(ExpenseItem);
