import React from "react";
import _ from "lodash";
import PastJobItem from "./PastJobItem";
import EditJobModal from "../EditJobModal";
import { filterFutureJobs } from "../../../../utilities";
import PastView from "./views/PastView";

export default class RenderPast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, currentJob: {} };
  }
  toggle = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  updateCurrentJob = currentJob => this.setState({ currentJob });

  renderModal = () => {
    const { modalOpen, currentJob } = this.state;
    if (modalOpen === true) {
      return (
        <EditJobModal
          isOpen={modalOpen}
          toggle={this.toggle}
          currentJob={currentJob}
        />
      );
    }
  };
  renderJobs = () => {
    const jobs = filterFutureJobs(this.props.jobs);
    const jobsArr = _.map(jobs, (job, key) => {
      return (
        <PastJobItem
          key={key}
          job={job}
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
  render() {
    return (
      <PastView renderModal={this.renderModal} renderJobs={this.renderJobs} />
    );
  }
}
