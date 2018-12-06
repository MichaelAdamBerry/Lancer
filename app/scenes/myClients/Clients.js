import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Table } from "reactstrap";
import Nav from "../dashboard/components/Nav";

export default class Clients extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Nav />
          <Col sm="12" md="12" lg="9">
            <h5 className="tableHeading">Clients</h5>
            <Table hover striped>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Rate</th>
                  <th>Payment</th>
                  <th>Most Recent Job</th>
                </tr>
              </thead>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
