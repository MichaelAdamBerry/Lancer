import React from "react";
import * as actions from "../../../actions/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

class ClientItem extends React.Component {
  handleRemove = expenseID => {
    const { removeClient } = this.props;
    removeClient(expenseID);
  };
  renderModalWithClient = clientObj => {
    this.props.updateCurrentClient(clientObj);
    this.props.toggle();
  };

  render() {
    const { client } = this.props;
    return (
      <tr>
        <td>{client.clientName}</td>
        <td>{client.contactName}</td>
        <td>{client.phone}</td>
        <td>
          <button
            type="button"
            onClick={() => {
              this.handleRemove(client.id);
            }}
            className="btn btn-danger">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </td>
        <td>
          <button
            type="button"
            onClick={() => {
              this.renderModalWithClient(client);
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
  actions
)(ClientItem);
