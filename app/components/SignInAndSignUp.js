import React from "react";
import { Jumbotron } from "reactstrap";

export default function SignInAndSignUp({ signInWithPopup }) {
  return (
    <Jumbotron fluid className="jumbotron">
      <div className="container-fluid">
        <h5 className="display-3">Welcome to Lancer!</h5>
        <h5 className="lead">Making life easy for freelancers!</h5>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={signInWithPopup}>
          Log In With Google
        </button>
      </div>
    </Jumbotron>
  );
}
