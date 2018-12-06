import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import Nav from "../dashboard/components/Nav";
export default class AddJob extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Nav />
          <Col md="12" lg="6">
            Add job form content
          </Col>
        </Row>
      </Container>
    );
  }
}
