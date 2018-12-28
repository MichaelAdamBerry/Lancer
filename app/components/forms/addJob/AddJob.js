import React from "react";
import { firestore } from "../../../firebase";
import collectIdsAndDocs from "../../../utilities";
import { connect } from "react-redux";
import * as actions from "../../../actions/actions";
import AddJobView from "./AddJobView";

class AddJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  componentWillMount() {
    this.props.fetchClients();
    this.setState({ clientData: this.props.clients });
  }

  componentWillUnmount() {
    this.props.fetchClients();
  }

  handleSubmit = event => {
    event.preventDefault();
    const addJob = this.props.addJob;
    const jobObj = {
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
        handleChange={this.handleChange}
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
