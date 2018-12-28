import React from "react";
import AddClientView from "./AddClientView";
import { connect } from "react-redux";
import { addClient } from "../../../actions/actions";

class AddClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: "",
      clientNameInvalid: true,
      contactName: "",
      phone: "",
      hrRate: "",
      dayRate: "",
      otRate: "",
      rateInvalid: true
    };
  }

  validate = () => {
    const { addClient } = this.props;
    if (this.state.hrRate === "" && this.state.dayRate === "") {
      console.log("either an hourly rate or a day rate are required");
      return;
    } else if (this.state.client === "") {
      console.log("the client must have a name");
      return;
    } else {
      const newClient = {
        clientName: this.state.clientName,
        contactName: this.state.contactName,
        phone: this.state.phone,
        hrRate: this.state.hrRate,
        dayRate: this.state.dayRate,
        otRate: this.state.otRate
      };
      addClient(newClient);
    }
  };

  clearState = () => {
    this.setState({
      clientName: "",
      clientNameInvalid: true,
      contactName: "",
      phone: "",
      hrRate: "",
      dayRate: "",
      otRate: "",
      rateInvalid: true
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.validate();
    this.clearState();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRequiredFieldChange = event => {
    const { name, value } = event.target;
    const invalidName = `${name}Invalid`;
    this.setState({ [name]: value });
    if (value === "") {
      this.setState({ [invalidName]: true });
    } else {
      this.setState({ [invalidName]: false });
    }
  };
  render() {
    const state = this.state;
    return (
      <AddClientView
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
  { addClient }
)(AddClient);
