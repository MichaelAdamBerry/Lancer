import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
  faUserTie,
  faHome,
  faSignOutAlt,
  faCalculator
} from "@fortawesome/free-solid-svg-icons";
import fakeAuth from "../fakeData/fakeAuth";

export default function MainNav(props) {
  return (
    <Row className="mainNav d-flex justify-content-around">
      <Col xs="3">
        {" "}
        <Link className="btn btn-outline-success" to="/dashboard">
          {" "}
          <FontAwesomeIcon icon={faHome} />{" "}
          <p className="d-none d-md-inline">| Go to Dashboard</p>
        </Link>
      </Col>
      <Col xs="3">
        {" "}
        <Link className="btn btn-outline-success" to="/addjob">
          <FontAwesomeIcon icon={faCalendarPlus} />{" "}
          <span className="d-none d-md-inline">| Add a Job</span>
        </Link>
      </Col>
      <Col xs="3">
        <Link className="btn btn-outline-success" to="/addclient">
          <FontAwesomeIcon icon={faUserTie} />{" "}
          <span className="d-none d-md-inline">| Add a Client</span>
        </Link>
      </Col>
      <Col xs="3">
        <Link className="btn btn-outline-success" to="/addexpense">
          <FontAwesomeIcon icon={faCalculator} />{" "}
          <span className="d-none d-md-inline"> | Add an Expense</span>
        </Link>
      </Col>
    </Row>
  );
}
