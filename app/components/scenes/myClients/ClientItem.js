import React from "react";
import * as actions from "../../../actions/actions";
import { connect } from "react-redux";
import ClientItemView from "./views/ClientItemView";
import ClientAlert from "./views/ClientAlert";

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
    const { alertOpen } = this.state;
    return (
      <ClientAlert
        clientObj={clientObj}
        alertOpen={alertOpen}
        toggle={this.toggle}
        handleRemove={this.handleRemove}
      />
    );
  };

  render() {
    const { client } = this.props;
    return (
      <ClientItemView
        client={client}
        renderAlert={this.renderAlert}
        renderModalWithClient={this.renderModalWithClient}
        toggle={this.toggle}
      />
    );
  }
}

export default connect(
  null,
  actions
)(ClientItem);
