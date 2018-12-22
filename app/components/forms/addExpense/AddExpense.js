import React from "react";
import { firestore } from "../../../firebase";
import AddExpenseView from "./AddExpenseView";

export default class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "",
      priceInvalid: true,
      client: "",
      clientInvalid: true,
      description: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { price, client, description } = this.state;
    const expenseObj = {
      price: price,
      client: client,
      description: description
    };
    this.handleCreate(expenseObj);
    this.setState({ price: "", client: "", description: "" });
  };

  handleCreate = async expenseObj => {
    const uid = "user";
    const docRef = await firestore
      .collection(`users/${uid}/expenses`)
      .add(expenseObj);
    return docRef;
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRequiredFieldChange = event => {
    const { name, value } = event.target;
    const invalidName = `${name}Invalid`;
    if (value === "") {
      this.setState({ [name]: value, [invalidName]: true });
    } else {
      this.setState({ [name]: value, [invalidName]: false });
    }
  };
  render() {
    const state = this.state;
    return (
      <AddExpenseView
        handleChange={this.handleChange}
        handleRequiredFieldChange={this.handleRequiredFieldChange}
        handleSubmit={this.handleSubmit}
        {...state}
      />
    );
  }
}
