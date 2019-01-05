import React from "react";
import {
  formatTime,
  formatDate,
  formatMobileDate
} from "../../../../utilities";

export default class DashFutureJob extends React.Component {
  render() {
    const { job } = this.props;
    return (
      <tr>
        <th scope="row">
          <span className="d-md-none">{formatMobileDate(job.date)}</span>
          <span className="d-none d-md-block">{formatDate(job.date)}</span>
        </th>
        <td>{formatTime(job.startTime)}</td>
        <td>{job.client}</td>
      </tr>
    );
  }
}
