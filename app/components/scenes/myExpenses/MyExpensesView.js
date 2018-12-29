import React from "react";
import { Table } from "reactstrap";
import _ from "lodash";
import ExpenseItem from "./ExpenseItem";

export default class MyExpensesView extends React.Component {
  renderExpenses = () => {
    const { expenses } = this.props;
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

  render() {
    return (
      <div className="container-fluid siteText">
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
