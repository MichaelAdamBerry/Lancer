import React from "react";
import { Container, Row, Col } from "reactstrap";
import Nav from "./components/Nav";
import Future from "../myJobs/Future";
import Past from "../myJobs/Past";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import Stats from "../myStats/Stats";

const Dashboard = ({ user }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav user={user} />
        <Col sm="12" md="9">
          <div className="col">
            <div className="col dashTable">
              <Future user={user} fullView={false} />
            </div>
            <div className="col dashTable">
              <Past user={user} fullView={false} />
            </div>
            <div className="col dashTable">
              <Stats showNav={false} />
            </div>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Dashboard;
