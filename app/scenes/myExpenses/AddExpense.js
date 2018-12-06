import React from "react";
import { Container, Row, Col } from "reactstrap";
import Nav from "../dashboard/components/Nav";

export default class AddExpense extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Nav />
          <Col>Add Expense Form Goes Here</Col>
        </Row>
      </Container>
    );
  }
}
