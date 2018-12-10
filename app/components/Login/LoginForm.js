import React from "react";
import PropTypes from "prop-types";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { throws } from "assert";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  static propTypes = {
    handleClick: PropTypes.func.isRequired
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.handleClick();
  };

  render() {
    const { handleClick } = this.props;
    const { email, password } = this.state;
    return (
      <Col md="12" lg="6" className="formContainer">
        <h4 className="display-4">Welcome back!</h4>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              value={email}
              onChange={this.handleChange}
              name="email"
              id="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Password">Password</Label>
            <Input
              type="password"
              value={password}
              onChange={this.handleChange}
              name="password"
              id="password"
            />
          </FormGroup>
          <Button
            type="button"
            className="btn btn-outline-success"
            onClick={this.handleSubmit}>
            View my Dashboard
          </Button>
        </Form>
      </Col>
    );
  }
}
