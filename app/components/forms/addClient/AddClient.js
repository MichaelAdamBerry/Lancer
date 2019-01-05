import React from "react";
import AddClientView from "./views/AddClientView";
import SuccessAlert from "../inputComponents/SuccessAlert";
import { connect } from "react-redux";
import { addClient } from "../../../actions/actions";
import {
  defaultOvertime,
  defaultDayRate,
  createClientObject
} from "../utils/formFunctions";

class AddClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreviewAlert: false,
      showWarningAlert: false,
      showSuccessAlert: false,
      showErrorAlert: false,
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
  //TODO clean up form validations
  validate = () => {
    const { addClient } = this.props;
    if (this.state.hrRate === "" && this.state.dayRate === "") {
      console.log("either an hourly rate or a day rate are required");
      return;
    } else if (this.state.client === "") {
      console.log("the client must have a name");
      return;
    } else {
      //TODO make an imported createNewCLient function
      const formData = this.state;
      var createdClient = createClientObject(formData);
      addClient(createdClient);
      this.setState({ showSuccessAlert: true });
      //this.setState({ showPreviewAlert: true });
    }
  };

  clearState = () => {
    this.setState({
      showErrorAlert: false,
      clientName: "",
      clientNameInvalid: "",
      contactName: "",
      phone: "",
      hrRate: "",
      dayRate: "",
      otRate: "",
      rateInvalid: true
    });
  };
  //TODO finish Preview Alert. Contains button to submit
  renderPreviewAlert = () => {
    if (this.state.showPreviewAlert === true) {
      return <SuccessAlert message="you sure?" />;
    } else {
      return <></>;
    }
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
