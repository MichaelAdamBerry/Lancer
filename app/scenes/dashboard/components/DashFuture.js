import React from "react";
import { Col, Table } from "reactstrap";
import { formatTime, formatDate } from "../../../utilities";
import PropTypes from "prop-types";

const DashFuture = ({ jobs }) => {
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
      </Table>
    </Col>
  );
};

export default DashFuture;

DashFuture.propTypes = {
  jobs: PropTypes.array.isRequired
};

DashFuture.defaultProps = {
  jobs: [{ id: "1", client: "", date: "" }, { id: "2", client: "", date: "" }]
};
