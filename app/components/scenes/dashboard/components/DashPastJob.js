import React from "react";
import { formatDate } from "../../../../utilities";
import { renderPaymentTD } from "../../myJobs/utils/myJobFunctions";

export default class DashPastJob extends React.Component {
  render() {
    const { job } = this.props;
    return (
      <tr>
        <th scope="row">{formatDate(job.date)}</th>
        <td>{job.client}</td>
        <td>{renderPaymentTD(job)}</td>
      </tr>
    );
  }
}
