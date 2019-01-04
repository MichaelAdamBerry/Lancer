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
        <td>{formatDate(job.date)}</td>
        <td>{job.client}</td>
        <td />
        <td>{!job.paid ? "unpaid" : "paid"}</td>
        <td>
          <div className="tableIcons">
            <span
              onClick={() => {
                this.renderModalWithJob(job);
              }}
              className="editIcon">
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span
              onClick={() => {
                this.handleRemove(job.id);
              }}
              className="deleteIcon">
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </div>
        </td>
      </tr>
    );
  }
}

export default connect(
  null,
  { removeJob }
)(PastJobItem);
