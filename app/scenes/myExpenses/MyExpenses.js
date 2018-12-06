import React from "react";
import { Container, Row, Col } from "reactstrap";
import Nav from "../dashboard/components/Nav";

export default class MyExpenses extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Nav />
          <Col>Expenses By Job Goes here </Col>
        </Row>
      </Container>
    );
  }
}
