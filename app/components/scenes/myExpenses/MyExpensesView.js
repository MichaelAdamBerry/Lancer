import React from "react";
import { Table } from "reactstrap";
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
      <div className="container-fluid siteText">
        {this.renderModal()}
        <div className="row">
          <div className="col content shadow">
            <h5 className="tableHeading">My Expenses</h5>
            <Table hover striped>
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Description</th>
                </tr>
                {this.renderExpenses()}
              </thead>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
