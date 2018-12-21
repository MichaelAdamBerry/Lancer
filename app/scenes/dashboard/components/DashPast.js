import React from "react";
import { Table } from "reactstrap";
import { formatDate } from "../../../utilities";

const DashPast = ({ jobs }) => {
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
              <td>{job.client}</td>
              <td>{formatDate(job.date)}</td>
              <td />
              <td />
            </tr>
          );
        })}
      </tbody>
    );
  }
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
        {display}
      </Table>
    </div>
  );
};

export default DashPast;
