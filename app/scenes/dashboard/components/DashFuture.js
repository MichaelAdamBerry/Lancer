import React from "react";
import { Col, Table } from "reactstrap";
import { formatTime, formatDate } from "../../../utilities";

const DashFuture = ({ jobs }) => {
  let display;
  if (!jobs) {
    display = (
      <tbody>
        <tr>
          <td>No jobs added yet</td>
        </tr>
      </tbody>
    );
  } else {
    display = (
      <tbody>
        {jobs.map(job => {
          return (
            <tr key={job.id}>
              <td>{formatDate(job.date)}</td>
              <td>{formatTime(job.startTime)}</td>
              <td>{job.client}</td>
              <td>{job.location}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
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
        {display}
      </Table>
    </Col>
  );
};

export default DashFuture;
