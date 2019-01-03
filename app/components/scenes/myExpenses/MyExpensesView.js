import React from "react";
import _ from "lodash";
import ExpenseItem from "./ExpenseItem";
import ModalEditExpense from "./ModalEditExpense";

//TODO ake ModalEditExpense component

export default class MyExpensesView extends React.Component {
  state = {
    modalOpen: false,
    currentExpense: {}
  };
  renderModal = () => {
    if (this.state.modalOpen === true) {
      return (
        <ModalEditExpense
          isOpen={this.state.modalOpen}
          toggle={this.toggle}
          currentExpense={this.state.currentExpense}
        />
      );
    }
  };
  toggle = () => this.setState({ modalOpen: !this.state.modalOpen });
  updateCurrentExpense = currentExpense => this.setState({ currentExpense });

  renderExpenses = () => {
    const { expenses } = this.props;
    const expenseArr = _.map(expenses, (value, key) => {
      return (
        <ExpenseItem
          key={key}
          expense={value}
          toggle={this.toggle}
          updateCurrentExpense={this.updateCurrentExpense}
        />
      );
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

  render() {
    return (
      <div className="container siteText">
        {this.renderModal()}
        <div className="row">
          <div className="col content shadow">
            <h5 className="tableHeading">My Expenses</h5>
            <table className="table">
              <caption>List of Expenses</caption>
              <thead>
                <tr>
                  <th scope="col">Amount</th>
                  <th scope="col">Description</th>
                  <th scope="col">Remove</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>{this.renderExpenses()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
