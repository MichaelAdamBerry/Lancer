import React from "react";
import _ from "lodash";
import PastJobItem from "./PastJobItem";
import EditJobModal from "./EditJobModal";
import { filterFutureJobs } from "../../../utilities";

export default class PastView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, currentJob: {} };
  }

  toggle = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  updateCurrentJob = currentJob => this.setState({ currentJob });

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
  renderJobs = () => {
    const jobs = filterFutureJobs(this.props.jobs);
    const jobsArr = _.map(jobs, (value, key) => {
      return (
        <PastJobItem
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
  render() {
    return (
      <div className="container-fluid siteText">
        {this.renderModal()}
        <div className="row">
          <div className="col content shadow">
            <h5 className="tableHeading">Past Jobs</h5>
            <table className="table table-sm">
              <caption>Full List of Past Jobs</caption>
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Client</th>
                  <th scope="col">$</th>
                  <th scope="col">Status</th>
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
