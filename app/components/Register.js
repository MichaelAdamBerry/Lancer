import React from "react";
import { Redirect } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Input,
  Label
} from "reactstrap";
import TitleBar from "./TitleBar";

//place holder toDash function redirects to <Dashboard/> which is a <PrivateRoute so sends us to <Login>

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      verifiedPassword: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      console.log("email and password are required fields");
    } else {
      console.log(this.state);
      this.props.handleClick();
    }
  };

  handlePasswordChange = event => {
    const value = event.target.value;
    this.setState({ password: value });
  };

  handleEmailChange = event => {
    const value = event.target.value;
    this.setState({ email: value });
  };

  handleVerifiedPasswordChange = event => {
    const value = event.target.value;
    this.setState({ verifiedPassword: value });
  };
  render() {
    const { email, password, verifiedPassword } = this.state;
    return (
      <Col className="formContainer">
        <h4 className="display-4">Let's get started!</h4>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              value={email}
              onChange={this.handleEmailChange}
              name="email"
              id="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              value={password}
              onChange={this.handlePasswordChange}
              name="password"
              id="Password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="verifiedPassword">ReType Password</Label>
            <Input
              type="password"
              value={verifiedPassword}
              onChange={this.handleVerifiedPasswordChange}
              name="password"
              id="verifiedPassword"
            />
          </FormGroup>
          <Button
            type="button"
            className="btn btn-outline-success"
            onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </Col>
    );
  }
}

export default class Register extends React.Component {
  state = { redirectToDash: false, modal: true };
  toDash = () => {
    this.setState({ redirectToDash: true });
  };

  render() {
    const registered = this.state.redirectToDash;
    return (
      <Container>
        {registered === true ? (
          <Redirect to="./dashboard" />
        ) : (
          <RegisterForm handleClick={this.toDash} />
        )}
      </Container>
    );
  }
}
