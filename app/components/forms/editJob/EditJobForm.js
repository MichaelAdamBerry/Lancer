import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/actions";
import EditJobFormView from "./EditJobFormView";

//EditJobForm is similar to AddJobForm component but only exists inside
//Modal in the Future and Past components of myJobs/Future & myJobs/Past
//Modal and EditJobForm are toggled open and passed specific jobObj
//in the JobItem Components

class EditJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.currentJob
    };
  }

  componentWillMount = async () => {
    this.props.fetchClients();
  };

  componentWillUnmount = () => {
    this.props.fetchClients();
  };

  handleEditSubmit = event => {
    event.preventDefault();

    //todo redux action
    const editJob = this.props.editJob;
    const jobObj = {
      client: this.state.client,
      id: this.state.id,
      date: this.state.date,
      rate: this.state.rate,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      location: this.state.location,
      notes: this.state.notes
    };
    if (!this.state.client || !this.state.date || !this.state.rate) {
      alert("Client Name, Date, and Rate Type are all required fields");
      return;
    } else {
      console.log(`handleEditSubmit clicked and the jobObj is  ${jobObj}`);
      editJob(this.state.id, { ...jobObj });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const state = this.state;
    return (
      <EditJobFormView
        clients={this.props.clients}
        handleChange={this.handleChange}
        handleEditSubmit={this.handleEditSubmit}
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
)(EditJobForm);
