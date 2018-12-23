import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";
import { formatDate } from "../../../utilities";

export default function PastView({ jobs, handleRemove, handleEdit }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col content shadow">
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
            <tbody>
              {jobs.map(job => {
                return (
                  <tr key={job.id}>
                    <td>{job.client}</td>
                    <td>{formatDate(job.date)}</td>
                    <td />
                    <td>{!job.paid ? "nope" : "yep"}</td>
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
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          handleEdit(job);
                        }}
                      />
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

PastView.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  jobs: PropTypes.array.isRequired
};
