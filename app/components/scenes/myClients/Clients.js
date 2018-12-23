import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Table } from "reactstrap";
import { firestore, auth } from "../../../firebase";
import { collectIdsAndDocs } from "../../../utilities";
import MyClientsView from "./MyClientsView";

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
        <MyClientsView
          clients={this.state.clients}
          handleRemove={this.handleRemove}
        />
      );
    }
  }
}
