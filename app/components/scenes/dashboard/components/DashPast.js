import React from "react";
import { Table } from "reactstrap";
import { formatDate } from "../../../../utilities";
import PropTypes from "prop-types";

const Job = ({ client, date }) => {
  return (
    <tr>
      <td>{client}</td>
      <td>{formatDate(date)}</td>
      <td />
      <td />
    </tr>
  );
};

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
            return <Job {...job} key={job.id} />;
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
