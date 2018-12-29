import React from "react";
import { removeJob } from "../../../actions/actions";
import { connect } from "react-redux";
import { formatTime, formatDate } from "../../../utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

class FutureJobItem extends React.Component {
  handleRemove = jobID => {
    const { removeJob } = this.props;
    removeJob(jobID);
  };
  handleEdit = jobID => {
    console.log("Edit Icon clicked");
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
            className="btn btn-danger">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </td>
        <td>
          <button
            type="button"
            onClick={() => {
              this.handleEdit(job.id);
            }}
            className="btn btn-secondary">
            <FontAwesomeIcon icon={faEdit} />
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
