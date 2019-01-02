import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/actions";
import AddJobView from "./AddJobView";

class AddJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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

    const rateType = this.state.rate;
    //calculateRate(...this.state)
    //if this.state.rate === "Hourly" calculateHourlyRate(clientObj.hrRate, date, startTime, endTime)
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
      notes: this.state.notes
    };
    this.validateForm();
    if (!this.state.client || !this.state.date || !this.state.rate) {
      console.log("Client Name, Date, and Rate Type are all required fields");
      return;
    } else {
      addJob(jobObj);
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
