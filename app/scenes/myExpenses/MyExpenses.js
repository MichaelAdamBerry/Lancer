import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import Nav from "../dashboard/components/Nav";
import firebase from "firebase";
import { firestore, auth } from "../../../app/firebase";
import { collectIdsAndDocs } from "../../../app/utilities";

const MyExpensesView = ({ expenses, handleRemove }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
        <div className="col">
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
        </div>
      </div>
    </div>
  );
};

export default class MyExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  unsubscribe = null;

  componentDidMount = async () => {
    const uid = "user";
    this.setState({ uid });
    this.unsubscribe = await firestore
      .collection(`users/${uid}/expenses`)
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
    const uid = "user";
    await firestore.doc(`users/${uid}/expenses/${id}`).delete();
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
