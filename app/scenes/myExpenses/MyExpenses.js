import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import Nav from "../dashboard/components/Nav";
import firebase from "firebase";
import { firestore } from "../../../app/firebase";
import { collectIdsAndDocs } from "../../../app/utilities";

const MyExpensesView = ({ expenses, handleRemove }) => {
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
              {expenses.map(i => {
                return (
                  <tr key={`${i}${i.id}`}>
                    <td>{i.price}</td>
                    <td>{i.description}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          handleRemove(i.id);
                        }}
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
};

export default class MyExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = await firestore
      .collection("expenses")
      .onSnapshot(snapshot => {
        const expenses = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ expenses });
      });
    console.log(this.state);
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  handleRemove = async id => {
    await firestore.doc(`expenses/${id}`).delete();
  };

  render() {
    if (!this.state.expenses) {
      return <div>loading</div>;
    } else {
      return (
        <MyExpensesView
          expenses={this.state.expenses}
          handleRemove={this.handleRemove}
        />
      );
    }
  }
}
