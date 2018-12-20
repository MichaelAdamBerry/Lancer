import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Table } from "reactstrap";
import Nav from "../dashboard/components/Nav";
import { firestore } from "../../../app/firebase";
import { collectIdsAndDocs } from "../../../app/utilities";

const ClientsView = ({ clients, handleRemove }) => {
  return (
    <Container fluid>
      <Row>
        <Nav />
        <Col sm="12" md="12" lg="9">
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
        </Col>
      </Row>
    </Container>
  );
};

export default class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userId: "", clients: null };
  }

  unmount = null;

  componentDidMount = async () => {
    this.unmount = await firestore
      .collection("clients")
      .onSnapshot(snapshot => {
        const clients = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ clients }, console.log(clients));
      });
  };

  componentWillUnmount() {
    this.unmount();
  }

  handleRemove = async id => {
    await firestore.doc(`clients/${id}`).delete();
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
