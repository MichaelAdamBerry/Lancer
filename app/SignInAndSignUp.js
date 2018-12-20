import React from "react";
import { signInWithPopup } from "./firebase";
import { Jumbotron, Container } from "reactstrap";

export default class SignInAndSignUp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Jumbotron fluid className="jumbotron">
        <Container fluid>
          <h5 className="display-3">Welcome to Lancer!</h5>
          <h5 className="lead">Making life easy for freelancers!</h5>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={signInWithPopup}>
            Log In With Google
          </button>
          <p className="lead">or</p>
          <button className="btn btn-outline-success" type="button">
            Sign Up
          </button>
        </Container>
      </Jumbotron>
    );
  }
}
