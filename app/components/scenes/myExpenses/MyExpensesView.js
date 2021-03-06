import React from "react";
import _ from "lodash";
import ExpenseItem from "./ExpenseItem";
import ModalEditExpense from "./ModalEditExpense";
import ExpensesView from "./views/ExpensesView";

//TODO ake ModalEditExpense component

export default class RenderMyExpenses extends React.Component {
  state = {
    editModalOpen: false,
    selectedExpense: {},
    selectedClient: "",
    filterExpenses: false
  };

  componentDidMount = () => {
    this.setState({ expenses: this.props.expenses });
  };
  renderEditModal = () => {
    if (this.state.editModalOpen === true) {
      return (
        <ModalEditExpense
          isOpen={this.state.editModalOpen}
          toggle={this.toggleModalEdit}
          currentExpense={this.state.selectedExpense}
        />
      );
    }
  };
  toggleFilterExpenses = () => {
    this.setState({ filterExpenses: !this.state.filterExpenses });
  };

  toggleModalEdit = () =>
    this.setState({ editModalOpen: !this.state.editModalOpen });

  updateSelectedExpense = expense =>
    this.setState({ selectedExpense: expense });

  updateSelectedClient = client => {
    this.setState({ selectedClient: client });
  };

  renderEmptyMessage = () => {
    return (
      <tr>
        <td colSpan="5">You have no expenses added yet</td>
      </tr>
    );
  };

  renderExpenses = () => {
    var { expenses } = this.props;
    var { filterExpenses, selectedClient } = this.state;
    var expenseAfterFilter = !filterExpenses
      ? expenses
      : _.filter(expenses, expense => {
          return selectedClient === expense.client;
        });
    console.log("expensesAfterFilter = ", expenseAfterFilter);
    const expenseArr = _.map(expenseAfterFilter, (value, key) => {
      return (
        <ExpenseItem
          key={key}
          expense={value}
          toggle={this.toggleModalEdit}
          updateCurrentExpense={this.updateSelectedExpense}
          updateSelectedClient={this.updateSelectedClient}
          toggleFilterExpenses={this.toggleFilterExpenses}
        />
      );
    });
    if (!_.isEmpty(expenseArr)) {
      return expenseArr;
    }
    return this.renderEmptyMessage();
  };

  render() {
    return (
      <ExpensesView
        renderEditModal={this.renderEditModal}
        renderExpenses={this.renderExpenses}
      />
    );
  }
}
