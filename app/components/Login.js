import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import fakeAuth from "../fakeData/fakeAuth";
import { Redirect } from "react-router-dom";

const LoginForm = ({ handleClick }) => {
  return (
    <Col className="formContainer">
      <h4 className="display-4">Welcome back!</h4>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password" />
        </FormGroup>
        <Button
          type="button"
          className="btn btn-outline-success"
          onClick={handleClick}>
          View my Dashboard
        </Button>
      </Form>
    </Col>
  );
};

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
