import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import Nav from "../dashboard/components/Nav";
import firebase from "firebase";

export default class MyExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.callback = this.callback.bind(this);
    this.state = {
      expenses: []
    };
  }

  remove(expenseId) {
    const expenseRef = firebase.database().ref(`/expenses/${expenseId}`);
    expenseRef.remove();
  }

  callback(snapshot) {
    let expenses = snapshot.val();
    let newState = [];
    for (let expense in expenses) {
      newState.push({
        id: expense,
        amount: expenses[expense].price,
        description: expenses[expense].description,
        user: expenses[expense].user
      });
    }
    this.setState({ expenses: newState }, console.log(this.state));
  }

  componentDidMount() {
    const expensesRef = firebase.database().ref("expenses");
    expensesRef.on("value", this.callback);
  }

  componentWillUnmount() {
    const expensesRef = firebase.database().ref("expenses");
    expensesRef.off("value", this.callback);
  }

  render() {
    return (
      <Container>
        <Row>
          <Nav />
          <Col>
            <h5 className="tableHeading">My Expenses</h5>
            <Table hover striped>
              <thead>
                <tr>
                  <th>Amount</th>
                  <th>Description</th>
                </tr>
                {this.state.expenses.map(i => {
                  return (
                    <tr key={`${i}${i.id}`}>
                      <td>{i.amount}</td>
                      <td>{i.description}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => this.remove(i.id)}
                          className="btn btn-small btn-danger">
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </thead>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
