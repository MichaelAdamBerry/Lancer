import React from "react";
import { Container, Row } from "reactstrap";
import fakeAuth from "../../fakeData/fakeAuth";
import { Redirect } from "react-router-dom";

import LoginForm from "./LoginForm.js";

export default class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };
  //should render a sign in form username and password
  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/dashboard" }
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <Container fluid>
        <Row>
          <LoginForm handleClick={this.login} />
        </Row>
      </Container>
    );
  }
}
