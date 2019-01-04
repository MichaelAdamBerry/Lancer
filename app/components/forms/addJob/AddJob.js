import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/actions";
import AddJobView from "./AddJobView";
import {
  getRegularHoursWorked,
  estimateNetPay,
  calculateGrossPay,
  getNghtOverTimeHoursWorked
} from "./utils/jobFunctions";

import SuccessAlert from "../inputComponents/SuccessAlert";

class AddJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuccessAlert: false,
      loading: true,
      grossPay: 0,
      paid: false,
      client: "",
      clientInvalid: true,
      date: "",
      dateInvalid: true,
      rate: "",
      rateInvalid: true,
      startTime: "",
      endTime: "",
      location: "",
      notes: ""
    };
  }

  clearState = () => {
    this.setState({
      clientInvalid: true,
      client: "",
      date: "",
      dateInvalid: true,
      rate: "",
      rateInvalid: true,
      startTime: "",
      endTime: "",
      location: "",
      notes: ""
    });
  };

  componentWillMount = async () => {
    this.props.fetchClients();
  };

  componentWillUnmount = () => {
    this.props.fetchClients();
  };

  renderSuccessAlert = () => {
    if (this.state.showSuccessAlert === true) {
      return <SuccessAlert message="Your job was added successfully!" />;
    } else {
      return <></>;
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    const { addJob, clients } = this.props;
    var clientObj = _.find(clients, val => {
      return val.clientName === this.state.client;
    });
    var { date, rate, startTime, endTime } = this.state;
    var hours = getRegularHoursWorked(date, startTime, endTime);
    var otHours = getNghtOverTimeHoursWorked(startTime, date);
    var gross = calculateGrossPay(rate, clientObj, hours, otHours);
    var estNet = estimateNetPay(gross);

    //if this.state.rate === "Day Rate" calculateDayRate(clientObj.dayRate)
    //if this.state.rate === "Multi Day" calculateMultiDay(clientObj.dayRate, daysWorked)
    //if this.state.rate === "Custom" calculateCustomRate(amount)

    const jobObj = {
      clientObj: clientObj,
      client: this.state.client,
      date: this.state.date,
      rate: this.state.rate,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      location: this.state.location,
      notes: this.state.notes,
      regularHours: hours,
      overTimeHours: otHours,
      gross: gross,
      estNet: estNet
    };
    this.validateForm();
    if (!this.state.client || !this.state.date || !this.state.rate) {
      console.warn("Client Name, Date, and Rate Type are all required fields");
      return;
    } else {
      this.setState({ showSuccessAlert: true });
      addJob(jobObj);
      console.log(jobObj);
      this.clearState();
    }
  };

  validateForm = () => {
    if (!this.state.client) {
      this.setState({ clientInvalid: true });
    } else if (!this.state.date) {
      this.setState({ dateInvalid: true });
    } else if (!this.state.rate) {
      this.setState({ rateInvalid: true });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRequiredFieldChange = event => {
    const { name, value } = event.target;
    const nameInvalid = `${name}Invalid`;
    this.setState({ [name]: value, [nameInvalid]: false });
  };

  render() {
    const state = this.state;
    return (
      <>
        {this.renderSuccessAlert()}
        <AddJobView
          clients={this.props.clients}
          handleChange={this.handleChange}
          handleClientSelect={this.handleClientSelect}
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
)(AddJob);
