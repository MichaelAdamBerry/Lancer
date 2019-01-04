import React from "react";
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarPlus,
  faUserTie,
  faHome,
  faCalculator,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import DropdownContent from "./DropdownContent";

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isLoading: true,
      dropdownOpen: false
    };
  }

  componentDidMount = () => {
    const uid = "user";
    this.setState({ uid }, () => {
      this.setState({ isLoading: false });
    });
  };

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    if (this.state.isLoading === false) {
      const { uid, dropdownOpen } = this.state;
      return (
        <RenderMainNav
          uid={uid}
          dropdownOpen={dropdownOpen}
          toggle={this.toggle}
        />
      );
    } else {
      return <div>loading</div>;
    }
  }
}

const dropDownStyles = {
  backgroundColor: "#6d5050",
  height: "75vh",
  width: "25vw"
};

const RenderMainNav = ({ uid, dropdownOpen, toggle }) => {
  return (
    <Row className="mainNav d-flex justify-content-around">
      <Col xs="2">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle className="btn btn-outline-success">
            <FontAwesomeIcon icon={faBars} />
            <p className="d-none d-md-inline">| My Data </p>
          </DropdownToggle>
          <DropdownMenu style={dropDownStyles}>
            <DropdownContent />
          </DropdownMenu>
        </Dropdown>
      </Col>
      <Col xs="2">
        {" "}
        <Link
          className="btn btn-outline-success"
          to={{ pathname: "/dashboard", state: { uid: uid } }}>
          {" "}
          <FontAwesomeIcon icon={faHome} />{" "}
          <p className="d-none d-md-inline">| Dashboard</p>
        </Link>
      </Col>
      <Col xs="2">
        {" "}
        <Link
          className="btn btn-outline-success"
          to={{ pathname: "/addjob", state: { uid: uid } }}>
          <FontAwesomeIcon icon={faCalendarPlus} />{" "}
          <span className="d-none d-md-inline">| Add a Job</span>
        </Link>
      </Col>
      <Col xs="2">
        <Link
          className="btn btn-outline-success"
          to={{ pathname: "/addclient", state: { uid: uid } }}>
          <FontAwesomeIcon icon={faUserTie} />{" "}
          <span className="d-none d-md-inline">| Add a Client</span>
        </Link>
      </Col>
      <Col xs="2">
        <Link
          className="btn btn-outline-success"
          to={{ pathname: "/addexpense", state: { uid: uid } }}>
          <FontAwesomeIcon icon={faCalculator} />{" "}
          <span className="d-none d-md-inline"> | Add an Expense</span>
        </Link>
      </Col>
    </Row>
  );
};
