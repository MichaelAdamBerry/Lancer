import React from "react";
import AddClientView from "./AddClientView";
import SuccessAlert from "../inputComponents/SuccessAlert";
import { connect } from "react-redux";
import { addClient } from "../../../actions/actions";
import { defaultOvertime, defaultDayRate } from "../utils/formFunctions";

class AddClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuccessAlert: false,
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
      this.setState({ showSuccessAlert: true });
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

  renderSuccessAlert = () => {
    if (this.state.showSuccessAlert === true) {
      return <SuccessAlert message="Your client was added successfully!" />;
    } else {
      return <></>;
    }
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

  handleHourlyChange = event => {
    const { name, value } = event.target;
    var overtime = defaultOvertime(value);
    var dayRate = defaultDayRate(value);
    this.setState({ [name]: value, otRate: overtime, dayRate: dayRate });
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
      <>
        {this.renderSuccessAlert()}
        <AddClientView
          handleChange={this.handleChange}
          handleRequiredFieldChange={this.handleRequiredFieldChange}
          handleSubmit={this.handleSubmit}
          handleHourlyChange={this.handleHourlyChange}
          {...state}
        />
      </>
    );
  }
}

export default connect(
  null,
  { addClient }
)(AddClient);
