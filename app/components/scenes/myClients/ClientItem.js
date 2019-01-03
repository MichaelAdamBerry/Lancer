import React from "react";
import * as actions from "../../../actions/actions";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

class ClientItem extends React.Component {
  state = { alertOpen: false };
  handleRemove = clientID => {
    const { removeClient } = this.props;
    removeClient(clientID);
    this.toggle();
  };

  toggle = () => {
    this.setState({ alertOpen: !this.state.alertOpen });
  };
  renderModalWithClient = clientObj => {
    this.props.updateCurrentClient(clientObj);
    this.props.toggle();
  };

  renderAlert = clientObj => {
    return (
      <tr>
        <td colSpan="5">
          <Alert
            color="danger"
            isOpen={this.state.alertOpen}
            toggle={this.toggle}>
            <h5 className="alert-heading">Are you sure?</h5>
            <p>
              Removing a client will delete all data associated with{" "}
              {clientObj.clientName}, including all job, expense and payment
              data.
            </p>
            <button
              className="btn btn-outline-danger"
              onClick={() => this.handleRemove(clientObj.id)}>
              Remove Client
            </button>
            <button className="btn btn-outline-success" onClick={this.toggle}>
              Nevermind
            </button>
          </Alert>
        </td>
      </tr>
    );
  };

  render() {
    const { client } = this.props;
    return (
      <>
        {this.renderAlert(client)}
        <tr>
          <td>{client.clientName}</td>
          <td>{client.contactName}</td>
          <td>{client.phone}</td>
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
          <td>
            <button
              type="button"
              onClick={() => {
                this.toggle();
              }}
              className="btn btn-danger">
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </td>
        </tr>
      </>
    );
  }
}

export default connect(
  null,
  actions
)(ClientItem);
