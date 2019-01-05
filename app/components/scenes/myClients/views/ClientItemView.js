import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

//TODO proptypes

export default function ClientItemView(props) {
  const { client, renderAlert, renderModalWithClient, toggle } = props;
  return (
    <>
      {renderAlert(client)}
      <tr>
        <td>{client.clientName}</td>
        <td>{client.contactName}</td>
        <td>{client.phone}</td>
        <td>
          <div className="tableIcons">
            <span
              onClick={() => {
                renderModalWithClient(client);
              }}
              className="editIcon">
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span
              onClick={() => {
                toggle();
              }}
              className="deleteIcon">
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
          </div>
        </td>
      </tr>
    </>
  );
}
