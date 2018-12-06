import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import PropTypes from "prop-types";
import Nav from "../dashboard/components/Nav";

const DashTable = () => {
  return (
    <Col>
      <h5 className="tableHeading">Past Jobs</h5>
      <Table hover striped>
        <thead>
          <tr>
            <th>Client</th>
            <th>Date</th>
            <th>Total $</th>
            <th>Status</th>
          </tr>
        </thead>
      </Table>
    </Col>
  );
};

const FullTable = () => {
  return (
    <Container>
      <Row>
        <Nav />
        <Col>
          <h5 className="tableHeading">Past Jobs</h5>
          <Table hover striped>
            <thead>
              <tr>
                <th>Client</th>
                <th>Date</th>
                <th>Total $</th>
                <th>Status</th>
              </tr>
            </thead>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default class Past extends React.Component {
  static propTypes = { fullView: PropTypes.bool.isRequired };
  static defaultProps = { fullView: true };
  render() {
    return <Col>{!this.props.fullView ? <DashTable /> : <FullTable />}</Col>;
  }
}
