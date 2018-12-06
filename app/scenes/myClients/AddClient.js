import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import Nav from "../dashboard/components/Nav";

export default class AddClient extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Nav />
          <Col md="12" lg="6">
            Form for Add Client goes here
          </Col>
        </Row>
      </Container>
    );
  }
}
