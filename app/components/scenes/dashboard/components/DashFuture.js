import React from "react";
import { filterPastJobs } from "../../../../utilities";
import DashFutureJob from "./DashFutureJob";

class DashFuture extends React.Component {
  renderJobs = () => {
    const jobs = filterPastJobs(this.props.jobs);
    const jobsArr = _.map(jobs, (value, key) => {
      return <DashFutureJob key={key} job={value} />;
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
      <div className="col">
        <h5 className="tableHeading">Upcomping Jobs</h5>
        <table className="table table-sm">
          <caption>Quick View of Upcoming Jobs</caption>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Client</th>
            </tr>
          </thead>
          <tbody>{this.renderJobs()}</tbody>
        </table>
      </div>
    );
  }
}

export default DashFuture;
