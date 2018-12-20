import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import Nav from "../dashboard/components/Nav";

export default class Stats extends React.Component {
  static propTypes = {
    ytd: PropTypes.string.isRequired,
    mtd: PropTypes.string.isRequired,
    showNav: PropTypes.bool.isRequired
  };
  static defaultProps = {
    ytd: "0",
    mtd: "0",
    showNav: true
  };
  render() {
    const { ytd, mtd, showNav } = this.props;
    return (
      <Container fluid>
        <Row className="underline">
          <Col>
            <h5>My Stats</h5>
          </Col>
        </Row>
        <Row className="d-flex align-content-around">
          {showNav === true ? <Nav /> : null}
          <Col className="align-content-center">
            <h5>Earnings</h5>
            <Container>
              <Row>
                <Col sm="12">Year to Date: {ytd}</Col>
              </Row>
              <Row>
                <Col>Month to Date: {mtd}</Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}
