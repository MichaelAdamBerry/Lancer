import React from "react";
import { removeClient } from "../../../actions/actions";
import { connect } from "react-redux";

class ClientItem extends React.Component {
  handleRemove = expenseID => {
    const { removeClient } = this.props;
    removeClient(expenseID);
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
  { removeClient }
)(ClientItem);
