import React from "react";
import { Table } from "reactstrap";
import PropTypes from "prop-types";
import { formatDate } from "../../../utilities";

const Job = ({ id, client, paid, date, handleRemove, handleEdit }) => {
  return (
    <tr>
      <td>{client}</td>
      <td>{formatDate(date)}</td>
      <td />
      <td>{!paid ? "nope" : "yep"}</td>
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
      <td>
        <button
          type="button"
          onClick={() => {
            handleEdit(id);
          }}
        />
      </td>
    </tr>
  );
};

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
                  <Job
                    key={job.id}
                    handleEdit={handleEdit}
                    handleRemove={handleRemove}
                    {...job}
                  />
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
