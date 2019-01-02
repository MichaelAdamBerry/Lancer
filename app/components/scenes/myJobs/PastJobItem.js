import React from "react";
import { removeJob } from "../../../actions/actions";
import { connect } from "react-redux";
import { formatDate } from "../../../utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

class PastJobItem extends React.Component {
  handleRemove = jobID => {
    const { removeJob } = this.props;
    removeJob(jobID);
  };
  renderModalWithJob = jobObj => {
    console.log("Edit Icon clicked");
    this.props.updateCurrentJob(jobObj);
    this.props.toggle();
  };

  render() {
    const { job } = this.props;
    return (
      <tr>
        <td>{job.client}</td>
        <td>{formatDate(job.date)}</td>
        <td />
        <td>{!job.paid ? "unpaid" : "paid"}</td>
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
              this.renderModalWithJob(job);
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
)(PastJobItem);
