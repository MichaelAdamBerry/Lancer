import React from "react";
import PropTypes from "prop-types";
import { formatTime, formatDate } from "../../../../../utilities";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
//TODO proptypes
export default function ItemFutureView({
  renderModalWithJob,
  handleRemove,
  job
}) {
  return (
    <tr>
      <td>{formatDate(job.date)}</td>
      <td>{formatTime(job.startTime)}</td>
      <td>{job.client}</td>
      <td>{job.location}</td>
      <td>
        <div className="tableIcons">
          <span
            onClick={() => {
              renderModalWithJob(job);
            }}
            className="editIcon">
            <FontAwesomeIcon icon={faEdit} />
          </span>
          <span
            onClick={() => {
              handleRemove(job.id);
            }}
            className="deleteIcon">
            <FontAwesomeIcon icon={faTrashAlt} />
          </span>
        </div>
      </td>
    </tr>
  );
}
