import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";
import { formatTime } from "../../../utilities";

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
                  <tr key={job.id}>
                    <td>{job.date}</td>
                    <td>{formatTime(job.startTime)}</td>
                    <td>{job.client}</td>
                    <td>{job.location}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          handleRemove(job.id);
                        }}
                        className="btn btn-small btn-danger">
                        Remove
                      </button>
                    </td>
                  </tr>
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
