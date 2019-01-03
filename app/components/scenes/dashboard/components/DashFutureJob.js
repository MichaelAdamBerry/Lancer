import React from "react";
import { formatTime, formatDate } from "../../../../utilities";

export default class DashFutureJob extends React.Component {
  render() {
    const { job } = this.props;
    return (
      <tr>
        <th scope="row">{formatDate(job.date)}</th>
        <td>{formatTime(job.startTime)}</td>
        <td>{job.client}</td>
        <td>{job.location}</td>
      </tr>
    );
  }
}
