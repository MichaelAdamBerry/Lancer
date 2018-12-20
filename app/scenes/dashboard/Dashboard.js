import React from "react";
import { Container, Row, Col } from "reactstrap";
import Nav from "./components/Nav";
import Future from "../myJobs/Future";
import Past from "../myJobs/Past";
import { Link } from "react-router-dom";
import Stats from "../myStats/Stats";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
        <Col sm="12" md="9">
          <div className={"container-fluid"}>
            <Row>
              <Future fullView={false} />
              <Past fullView={false} />
            </Row>
            <Row className="align-content-center">
              <Col>
                <Stats showNav={false} />
              </Col>
            </Row>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Dashboard;
