import React from "react";
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
  faUserTie,
  faHome,
  faCalculator,
  faArrowCircleDown
} from "@fortawesome/free-solid-svg-icons";
import DropdownContent from "./DropdownContent";

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Row className="mainNav d-flex justify-content-around">
        <Col xs="2" className="d-md-none ">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle>
              <FontAwesomeIcon icon={faArrowCircleDown} />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownContent />
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col xs="2" md="3">
          {" "}
          <Link className="btn btn-outline-success" to="/dashboard">
            {" "}
            <FontAwesomeIcon icon={faHome} />{" "}
            <p className="d-none d-md-inline">| Go to Dashboard</p>
          </Link>
        </Col>
        <Col xs="2" md="3">
          {" "}
          <Link className="btn btn-outline-success" to="/addjob">
            <FontAwesomeIcon icon={faCalendarPlus} />{" "}
            <span className="d-none d-md-inline">| Add a Job</span>
          </Link>
        </Col>
        <Col xs="2" md="3">
          <Link className="btn btn-outline-success" to="/addclient">
            <FontAwesomeIcon icon={faUserTie} />{" "}
            <span className="d-none d-md-inline">| Add a Client</span>
          </Link>
        </Col>
        <Col xs="2" md="3">
          <Link className="btn btn-outline-success" to="/addexpense">
            <FontAwesomeIcon icon={faCalculator} />{" "}
            <span className="d-none d-md-inline"> | Add an Expense</span>
          </Link>
        </Col>
      </Row>
    );
  }
}
