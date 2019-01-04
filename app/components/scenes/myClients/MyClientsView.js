import React from "react";
import _ from "lodash";
import ClientItem from "./ClientItem";
import ModalEditClient from "./ModalEditClient";

export default class MyClientsView extends React.Component {
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
      <div className="container siteText">
        {this.renderModal()}
        <div className="row">
          <div className="col content shadow">
            <h5 className="tableHeading">Clients</h5>
            <table className="table table-sm">
              <caption>List of Users</caption>
              <thead>
                <tr>
                  <th scope="col">Client</th>
                  <th scope="col">Main Contact</th>
                  <th scope="col">Phone</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>{this.renderClients()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
