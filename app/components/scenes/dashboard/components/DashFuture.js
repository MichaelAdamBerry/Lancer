import React from "react";
import { Col, Table } from "reactstrap";
import { formatTime, formatDate } from "../../../../utilities";
import PropTypes from "prop-types";

const Job = ({ id, date, startTime, client, location }) => {
  return (
    <tr key={id}>
      <td>{formatDate(date)}</td>
      <td>{formatTime(startTime)}</td>
      <td>{client}</td>
      <td>{location}</td>
    </tr>
  );
};

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
            return <Job {...job} key={job.id} />;
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
