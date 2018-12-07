import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import TitleBar from "./TitleBar";
import { Link, Redirect } from "react-router-dom";

export default class WelcomeSplash extends React.Component {
  render() {
    return (
      <Jumbotron fluid className="jumbotron">
        <Container fluid>
          <h5 className="display-3">Welcome to Lancer!</h5>
          <h5 className="lead">Making life easy for freelancers!</h5>
          <Link className="btn btn-outline-success" to="/register">
            sign up
          </Link>
          <p className="lead">or</p>
          <Link className="btn btn-outline-success" to="/login">
            Log in
          </Link>
        </Container>
      </Jumbotron>
    );
  }
}
