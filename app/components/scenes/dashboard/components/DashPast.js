import React from "react";
import { Table } from "reactstrap";
import { formatDate } from "../../../../utilities";
import PropTypes from "prop-types";

const DashPast = ({ jobs }) => {
  return (
    <div className="col">
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
                <td />
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DashPast;

DashPast.propTypes = {
  jobs: PropTypes.array.isRequired
};

DashPast.defaultProps = {
  jobs: [{ id: "1", client: "", date: "" }, { id: "2", client: "", date: "" }]
};
