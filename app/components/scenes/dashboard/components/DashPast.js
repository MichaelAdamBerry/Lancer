import React from "react";
import { Table } from "reactstrap";
import DashPastJob from "./DashPastJob";
import { formatDate } from "../../../../utilities";
import PropTypes from "prop-types";

class DashPast extends React.Component {
  renderJobs = () => {
    const { jobs } = this.props;
    const jobsArr = _.map(jobs, (value, key) => {
      return <DashPastJob key={key} job={value} />;
    });
    if (!_.isEmpty(jobsArr)) {
      return jobsArr;
    }
    return (
      <tr>
        <td>No past jobs have been added yet</td>
      </tr>
    );
  };
  render() {
    return (
      <div className="col">
        <h5 className="tableHeading">Past Jobs</h5>
        <Table hover striped responsive>
          <thead>
            <tr>
              <th>Client</th>
              <th>Date</th>
              <th>Total $</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{this.renderJobs()}</tbody>
        </Table>
      </div>
    );
  }
}

export default DashPast;
