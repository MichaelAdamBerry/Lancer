import React from "react";
import { removeJob } from "../../../actions/actions";
import { connect } from "react-redux";
import { formatDate } from "../../../utilities";

class PastJobItem extends React.Component {
  handleRemove = jobID => {
    const { removeJob } = this.props;
    removeJob(jobID);
  };
  render() {
    const { job } = this.props;
    return (
      <tr>
        <td>{job.client}</td>
        <td>{formatDate(job.date)}</td>
        <td />
        <td>{!job.paid ? "nope" : "yep"}</td>
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
)(PastJobItem);
