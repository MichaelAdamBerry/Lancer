import React from "react";
import _ from "lodash";
import ClientItem from "./ClientItem";
import ModalEditClient from "./ModalEditClient";
import ClientView from "./views/ClientsView";

export default class RenderClients extends React.Component {
  state = { modalOpen: false, currentClient: {} };

  toggle = () => this.setState({ modalOpen: !this.state.modalOpen });

  updateCurrentClient = clientObj => {
    this.setState({ currentClient: clientObj });
  };

  renderModal = () => {
    if (this.state.modalOpen === true) {
      return (
        <ModalEditClient
          isOpen={this.state.modalOpen}
          currentClient={this.state.currentClient}
          toggle={this.toggle}
        />
      );
    }
  };

  renderClients = () => {
    const { clients } = this.props;
    const clientArr = _.map(clients, (value, key) => {
      return (
        <ClientItem
          key={key}
          client={value}
          updateCurrentClient={this.updateCurrentClient}
          toggle={this.toggle}
        />
      );
    });
    if (!_.isEmpty(clientArr)) {
      return clientArr;
    }

    return (
      <tr>
        <td colSpan="4">You haven't added any clients yet</td>
      </tr>
    );
  };

  render() {
    return (
      <ClientView
        renderClients={this.renderClients}
        renderModal={this.renderModal}
      />
    );
  }
}
