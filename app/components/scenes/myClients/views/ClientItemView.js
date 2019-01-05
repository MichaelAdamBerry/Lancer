import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";

//TODO proptypes

export default function ClientItemView(props) {
  const { client, renderAlert, renderModalWithClient, toggle } = props;
  return (
    <>
      {renderAlert(client)}
      <tr>
        <td>{client.clientName}</td>
        <td>{client.contactName}</td>
        <td>
          <span className="d-md-none">
            <a href={`tel:+${client.phone}`}>
              <FontAwesomeIcon icon={faMobileAlt} />
            </a>
          </span>
          <span className="d-none d-md">{client.phone}</span>
        </td>
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
