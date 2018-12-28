import React from "react";
import { Col, Table } from "reactstrap";
import DashFutureJob from "./DashFutureJob";

class DashFuture extends React.Component {
  renderJobs = () => {
    const { jobs } = this.props;
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
      <Col>
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
      </Col>
    );
  }
}

export default DashFuture;
