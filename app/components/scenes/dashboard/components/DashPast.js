import React from "react";
import { Table } from "reactstrap";
import DashPastJob from "./DashPastJob";
import { filterFutureJobs } from "../../../../utilities";

class DashPast extends React.Component {
  renderJobs = () => {
    const jobs = filterFutureJobs(this.props.jobs);
    var jobsArr = _.map(jobs, (value, key) => {
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
        <table className="table table-sm">
          <caption>Quick View of Past Jobs</caption>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Client</th>
              <th scope="col">$</th>
            </tr>
          </thead>
          <tbody>{this.renderJobs()}</tbody>
        </table>
      </div>
    );
  }
}

export default DashPast;
