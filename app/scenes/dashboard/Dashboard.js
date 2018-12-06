import React from "react";
import { Container, Row, Col } from "reactstrap";
import Nav from "./components/Nav";
import Future from "../myJobs/Future";
import Past from "../myJobs/Past";
import { Link } from "react-router-dom";
import Stats from "../myStats/Stats";

export default class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Nav />
          <Col sm="12" md="9">
            <Container>
              <Row style={{ height: "50vh" }}>
                <Future fullView={false} />
                <Past fullView={false} />
              </Row>
              <Row className="align-content-center" style={{ height: "30vh" }}>
                <Col>
                  <Stats showNav={false} />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}
