import React from "react";
import _ from "lodash";
import FutureView from "./views/FutureView";
import FutureJobItem from "./FutureJobItem";
import { filterPastJobs } from "../../../../utilities";
import EditJobModal from "../EditJobModal";

export default class RednerFuture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, currentJob: {} };
  }

  toggle = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  updateCurrentJob = currentJob => this.setState({ currentJob });

  renderJobs = () => {
    const jobs = filterPastJobs(this.props.jobs);
    const jobsArr = _.map(jobs, (value, key) => {
      return (
        <FutureJobItem
          key={key}
          job={value}
          toggle={this.toggle}
          updateCurrentJob={this.updateCurrentJob}
        />
      );
    });
    if (!_.isEmpty(jobsArr)) {
      return jobsArr;
    }
    return (
      <tr>
        <td colSpan="5">No upcoming jobs have been added yet</td>
      </tr>
    );
  };

  renderModal = () => {
    if (this.state.modalOpen === true) {
      return (
        <EditJobModal
          isOpen={this.state.modalOpen}
          toggle={this.toggle}
          currentJob={this.state.currentJob}
        />
      );
    }
  };
  render() {
    return (
      <FutureView renderJobs={this.renderJobs} renderModal={this.renderModal} />
    );
  }
}
