//TODO add input for contact email address
//TODO

import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Label,
  FormGroup,
  Button
} from "reactstrap";

export default class AddClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: "",
      contactName: "",
      phone: "",
      hrRate: "",
      dayRate: "",
      otRate: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.hrRate === "" && this.state.dayRate === "") {
      console.log("either an hourly rate or a day rate are required");
      return;
    } else if (this.state.client === "") {
      console.log("the client must have a name");
    } else {
      console.log(this.state);
      this.setState({
        clientName: "",
        contactName: "",
        phone: "",
        hrRate: "",
        dayRate: "",
        otRate: ""
      });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      clientName,
      contactName,
      phone,
      hrRate,
      dayRate,
      otRate
    } = this.state;
    return (
      <Container>
        <Row>
          <Col md="12" lg="6">
            <h3>Add a New Client to your Client List</h3>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="clientName">Name</Label>
                <Input
                  type="text"
                  name="clientName"
                  value={clientName}
                  onChange={this.handleChange}
                  id="clientName"
                />
              </FormGroup>
              <FormGroup>
                <Label for="contactName">Main Contact</Label>
                <Input
                  type="text"
                  name="contactName"
                  value={contactName}
                  onChange={this.handleChange}
                  id="contactName"
                />
                <Label for="contactPhone">Contacts Phone</Label>
                <Input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                  id="contactTel"
                />
              </FormGroup>
              <FormGroup>
                <Label for="hourlyRate">Hourly Rate</Label>
                <Input
                  type="number"
                  name="hrRate"
                  value={hrRate}
                  onChange={this.handleChange}
                />
                <Label for="dayRate">Day Rate</Label>
                <Input
                  type="number"
                  value={dayRate}
                  name="dayRate"
                  onChange={this.handleChange}
                />
                <Label for="overTimeRate">Overtime Rate</Label>
                <Input
                  type="number"
                  name="otRate"
                  value={otRate}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Form>
            <Button
              type="button"
              onClick={this.handleSubmit}
              className="btn btn-success">
              Add a New Client
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
