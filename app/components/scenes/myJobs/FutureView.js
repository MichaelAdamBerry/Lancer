import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";
import { formatTime } from "../../../utilities";

const Job = ({ date, startTime, client, location, handleRemove }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{formatTime(startTime)}</td>
      <td>{client}</td>
      <td>{location}</td>
      <td>
        <button
          type="button"
          onClick={() => {
            handleRemove(id);
          }}
          className="btn btn-small btn-danger">
          Remove
        </button>
      </td>
    </tr>
  );
};

export default function FutureView({ jobs, handleRemove }) {
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
            <tbody>
              {jobs.map(job => {
                return (
                  <Job key={job.id} handleRemove={handleRemove} {...job} />
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

FutureView.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  jobs: PropTypes.array.isRequired
};
