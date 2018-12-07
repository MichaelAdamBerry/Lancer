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

const RegisterForm = ({ handleClick }) => {
  return (
    <Col className="formContainer">
      <h4 className="display-4">Let's get started!</h4>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="Password" />
        </FormGroup>
        <FormGroup>
          <Label for="verifiedPassword">ReType Password</Label>
          <Input type="password" name="password" id="verifiedPassword" />
        </FormGroup>
        <Button
          type="button"
          className="btn btn-outline-success"
          onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </Col>
  );
};

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
