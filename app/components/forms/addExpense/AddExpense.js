import React from "react";
import { connect } from "react-redux";
import AddExpenseView from "./AddExpenseView";
import { addExpense } from "../../../actions/actions";

class AddExpense extends React.Component {
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
    //addExpense a redux action to write to database
    const { addExpense } = this.props;
    const { price, client, description } = this.state;
    const expenseObj = {
      price: price,
      client: client,
      description: description
    };
    addExpense(expenseObj);
    this.setState({ price: "", client: "", description: "" });
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

export default connect(
  null,
  { addExpense }
)(AddExpense);
