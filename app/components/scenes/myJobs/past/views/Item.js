import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { renderPaymentTD } from "../../utils/myJobFunctions";
import { formatDate, formatMobileDate } from "../../../../../utilities";

export default function Item({ job, renderModalWithJob, handleRemove }) {
  return (
    <tr>
      <td>
        {" "}
        <span className="d-md-none">{formatMobileDate(job.date)}</span>
        <span className="d-none d-md-block">{formatDate(job.date)}</span>
      </td>
      <td>{job.client}</td>
      <td className="text-small">{renderPaymentTD(job)}</td>
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

Item.propTypes = {
  job: PropTypes.object,
  renderModalWithJob: PropTypes.func,
  handleRemove: PropTypes.func
};
