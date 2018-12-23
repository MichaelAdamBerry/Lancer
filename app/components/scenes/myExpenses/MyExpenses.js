import React from "react";
import { firestore } from "../../../firebase";
import { collectIdsAndDocs } from "../../../utilities";
import MyExpensesView from "./MyExpensesView";

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
