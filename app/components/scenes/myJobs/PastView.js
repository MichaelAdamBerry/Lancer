import React from "react";
import { Table } from "reactstrap";
import _ from "lodash";
import PropTypes from "prop-types";
import PastJobItem from "./PastJobItem";
import { formatDate } from "../../../utilities";

export default class PastView extends React.Component {
  renderJobs = () => {
    const { jobs } = this.props;
    const jobsArr = _.map(jobs, (value, key) => {
      return <PastJobItem key={key} job={value} />;
    });
    if (!_.isEmpty(jobsArr)) {
      return jobsArr;
    }
    return (
      <tr>
        <td>No upcoming jobs have been added yet</td>
      </tr>
    );
  };
  render() {
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
              <tbody>{this.renderJobs()}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
