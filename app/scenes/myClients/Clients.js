import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Table } from "reactstrap";
import { firestore, auth } from "../../../app/firebase";
import { collectIdsAndDocs } from "../../../app/utilities";

const ClientsView = ({ clients, handleRemove }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col content shadow">
          <h5 className="tableHeading">Clients</h5>
          <Table hover striped>
            <thead>
              <tr>
                <th>Client</th>
                <th>Main Contact</th>
                <th>phone</th>
              </tr>
              {clients.map(client => {
                return (
                  <tr key={client.id}>
                    <td>{client.clientName}</td>
                    <td>{client.contactName}</td>
                    <td>{client.phone}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          handleRemove(client.id);
                        }}
                        className="btn btn-small btn-danger">
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </thead>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clients: null };
  }

  unmount = null;

  componentDidMount = async () => {
    const uid = "user";
    this.setState({ uid });
    this.unmount = await firestore
      .collection(`users/${uid}/clients`)
      .onSnapshot(snapshot => {
        const clients = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ clients });
      });
  };

  componentWillUnmount() {
    this.unmount();
  }

  handleRemove = async id => {
    await firestore.doc(`users/${this.state.uid}/clients/${id}`).delete();
  };
  render() {
    if (!this.state.clients) {
      return <div>loading</div>;
    } else {
      return (
        <ClientsView
          clients={this.state.clients}
          handleRemove={this.handleRemove}
        />
      );
    }
  }
}
