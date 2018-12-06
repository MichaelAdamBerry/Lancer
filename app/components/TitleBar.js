import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import fakeAuth from "../fakeData/fakeAuth";

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <button
      className="btn btn-outline-dark"
      onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}>
      <FontAwesomeIcon icon={faSignOutAlt} />{" "}
      <span className="d-none d-md-inline">| Sign out</span>
    </button>
  ) : (
    <p className="text-muted">logged out</p>
  )
);

export default class TitleBar extends React.Component {
  signedIn = this.props.signedIn;
  handleClick = this.props.handleClick;
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired
  };
  render() {
    return (
      <Row className="titleBar">
        <Col xs="2" className="titleIcon">
          <FontAwesomeIcon icon={faDragon} size="lg" />
        </Col>
        <Col xs="8" className="siteTitle align-items-center text-center">
          <h1>Lancer</h1>
        </Col>
        <Col xs="2" className="titleIcon">
          <AuthButton />
        </Col>
      </Row>
    );
  }
}
