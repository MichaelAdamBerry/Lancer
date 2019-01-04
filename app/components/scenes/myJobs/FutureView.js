import React from "react";
import _ from "lodash";
import FutureJobItem from "./FutureJobItem";
import { filterPastJobs } from "../../../utilities";
import EditJobModal from "./EditJobModal";

export default class FutureView extends React.Component {
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
      <div className="container-fluid siteText">
        {this.renderModal()}
        <div className="row">
          <div className="col content shadow">
            <h5 className="tableHeading">Upcomping Jobs</h5>
            <table className="table table-sm">
              <caption>Full View of Upcoming Jobs</caption>
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Client</th>
                  <th scope="col">Location</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>{this.renderJobs()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
