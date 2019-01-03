import React from "react";
import { connect } from "react-redux";
import AddExpenseView from "./AddExpenseView";
import SuccessAlert from "../inputComponents/SuccessAlert";
import * as actions from "../../../actions/actions";

class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuccessAlert: false,
      price: "",
      priceInvalid: true,
      client: "",
      clientInvalid: true,
      description: ""
    };
  }

  componentWillMount = async () => {
    this.props.fetchClients();
  };
  componentWillUnmount = () => {
    this.props.fetchClients();
  };
  renderSuccessAlert = () => {
    if (this.state.showSuccessAlert === true) {
      return <SuccessAlert message="Your exense was added successfully!" />;
    } else {
      return <></>;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    //addExpense a redux action to write to database
    const { addExpense, clients } = this.props;
    const { price, client, description } = this.state;
    const clientObj = _.find(clients, val => val.clientName === client);
    const expenseObj = {
      clientObj: clientObj,
      price: price,
      client: client,
      description: description
    };
    addExpense(expenseObj);
    this.setState({ showSuccessAlert: true });
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
      <>
        {this.renderSuccessAlert()}
        <AddExpenseView
          clients={this.props.clients}
          handleChange={this.handleChange}
          handleRequiredFieldChange={this.handleRequiredFieldChange}
          handleSubmit={this.handleSubmit}
          {...state}
        />
      </>
    );
  }
}

const mapStateToProps = ({ clients }) => {
  return {
    clients
  };
};

export default connect(
  mapStateToProps,
  actions
)(AddExpense);
