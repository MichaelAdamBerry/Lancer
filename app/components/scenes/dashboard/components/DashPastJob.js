import React from "react";
import { formatDate } from "../../../../utilities";

export default class DashPastJob extends React.Component {
  render() {
    const { job } = this.props;
    return (
      <tr>
        <td>{job.client}</td>
        <td>{formatDate(job.date)}</td>
        <td />
        <td />
      </tr>
    );
  }
}
