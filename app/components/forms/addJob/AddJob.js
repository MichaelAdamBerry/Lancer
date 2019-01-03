import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/actions";
import AddJobView from "./AddJobView";
import { getMinutesWorked } from "../../../utilities";

class AddJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleSubmit = event => {
    event.preventDefault();
    const { addJob, clients } = this.props;
    const clientObj = _.find(clients, val => {
      return val.clientName === this.state.client;
    });

    const { rate, date, startTime, endTime, grossPay } = this.state;
    if (rate === "Hourly" && startTime && endTime) {
      const minutes = getMinutesWorked(date, startTime, endTime);
      const hourlyRate = Number(clientObj.hrRate);
      console.log("gross rate should be ", hourlyRate * (minutes / 60));
      const gross = hourlyRate * (minutes / 60);
      this.setState({ grossPay: gross }, console.log(this.state));
    }

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
      grossPay: this.state.grossPay
    };
    this.validateForm();
    if (!this.state.client || !this.state.date || !this.state.rate) {
      console.log("Client Name, Date, and Rate Type are all required fields");
      return;
    } else {
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
      <AddJobView
        clients={this.props.clients}
        handleChange={this.handleChange}
        handleClientSelect={this.handleClientSelect}
        handleRequiredFieldChange={this.handleRequiredFieldChange}
        handleSubmit={this.handleSubmit}
        {...state}
      />
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
