import React from "react";
import { Table } from "reactstrap";
import _ from "lodash";
import PropTypes from "prop-types";
import { formatTime } from "../../../utilities";
import FutureJobItem from "./FutureJobItem";

export default class FutureView extends React.Component {
  renderJobs = () => {
    const { jobs } = this.props;
    const jobsArr = _.map(jobs, (value, key) => {
      return <FutureJobItem key={key} job={value} />;
    });
    if (!_.isEmpty(jobsArr)) {
      return jobsArr;
    }
    return (
      <tr>
        <td>No upcoming jobs have been added yet</td>
      </tr>
    );
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col content shadow">
            <h5 className="tableHeading">Upcomping Jobs</h5>
            <Table hover striped responsive>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Client</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>{this.renderJobs()}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
