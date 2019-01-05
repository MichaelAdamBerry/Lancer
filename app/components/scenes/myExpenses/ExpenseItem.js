import React from "react";
import * as actions from "../../../actions/actions";
import { connect } from "react-redux";
import ExpenseItemView from "./views/ExpenseItemView";

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
    return (
      <ExpenseItemView
        onClientClick={this.onClientClick}
        onEditClick={this.onEditClick}
        handleRemove={this.handleRemove}
        expense={this.props.expense}
      />
    );
  }
}

export default connect(
  null,
  actions
)(ExpenseItem);
