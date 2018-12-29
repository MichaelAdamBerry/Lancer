import React from "react";
import { removeJob } from "../../../actions/actions";
import { connect } from "react-redux";
import { formatTime, formatDate } from "../../../utilities";

class FutureJobItem extends React.Component {
  handleRemove = jobID => {
    const { removeJob } = this.props;
    removeJob(jobID);
  };
  render() {
    const { job } = this.props;
    return (
      <tr>
        <td>{formatDate(job.date)}</td>
        <td>{formatTime(job.startTime)}</td>
        <td>{job.client}</td>
        <td>{job.location}</td>
        <td>
          <button
            type="button"
            onClick={() => {
              this.handleRemove(job.id);
            }}
            className="btn btn-small btn-danger">
            Remove
          </button>
        </td>
      </tr>
    );
  }
}

export default connect(
  null,
  { removeJob }
)(FutureJobItem);
