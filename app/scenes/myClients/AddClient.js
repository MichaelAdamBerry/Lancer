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
      client: "",
      contact: "",
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
        client: "",
        contact: "",
        phone: "",
        hrRate: "",
        dayRate: "",
        otRate: ""
      });
    }
  };

  handleClientChange = event => {
    const value = event.target.value;
    this.setState({ client: value });
  };

  handleContactChange = event => {
    const value = event.target.value;
    this.setState({ contact: value });
  };

  handleHrRateChange = event => {
    const value = event.target.value;
    this.setState({ hrRate: value });
  };

  handlePhoneChange = event => {
    const value = event.target.value;
    this.setState({ phone: value });
  };

  handleDayRateChange = event => {
    const value = event.target.value;
    this.setState({ dayRate: value });
  };

  handleOtRateChange = event => {
    const value = event.target.value;
    this.setState({ otRate: value });
  };

  render() {
    const { client, contact, phone, hrRate, dayRate, otRate } = this.state;
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
                  value={client}
                  onChange={this.handleClientChange}
                  id="clientName"
                />
              </FormGroup>
              <FormGroup>
                <Label for="contactName">Main Contact</Label>
                <Input
                  type="text"
                  name="contactName"
                  value={contact}
                  onChange={this.handleContactChange}
                  id="contactName"
                />
                <Label for="contactPhone">Contacts Phone</Label>
                <Input
                  type="tel"
                  value={phone}
                  onChange={this.handlePhoneChange}
                  id="contactTel"
                />
              </FormGroup>
              <FormGroup>
                <Label for="hourlyRate">Hourly Rate</Label>
                <Input
                  type="number"
                  value={hrRate}
                  onChange={this.handleHrRateChange}
                />
                <Label for="dayRate">Day Rate</Label>
                <Input
                  type="number"
                  value={dayRate}
                  onChange={this.handleDayRateChange}
                />
                <Label for="overTimeRate">Overtime Rate</Label>
                <Input
                  type="number"
                  value={otRate}
                  onChange={this.handleOtRateChange}
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
