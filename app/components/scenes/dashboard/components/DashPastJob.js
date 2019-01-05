import React from "react";
import { formatDate, formatMobileDate } from "../../../../utilities";
import { renderPaymentTD } from "../../myJobs/utils/myJobFunctions";

export default class DashPastJob extends React.Component {
  render() {
    const { job } = this.props;
    const payment = renderPaymentTD(job);
    return (
      <tr>
        <th scope="row">
          {" "}
          <span className="d-md-none">{formatMobileDate(job.date)}</span>
          <span className="d-none d-md-block">{formatDate(job.date)}</span>
        </th>
        <td>{job.client}</td>
        <td style={payment.style}>{payment.string}</td>
      </tr>
    );
  }
}
