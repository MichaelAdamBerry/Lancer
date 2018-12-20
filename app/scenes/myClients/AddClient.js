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
  FormText,
  Button
} from "reactstrap";
import { firestore } from "../../../app/firebase";
import { toHtml } from "@fortawesome/fontawesome-svg-core";

export default class AddClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: "",
      clientNameInvalid: true,
      contactName: "",
      phone: "",
      hrRate: "",
      dayRate: "",
      otRate: "",
      rateInvalid: true
    };
  }

  validate = () => {
    if (this.state.hrRate === "" && this.state.dayRate === "") {
      console.log("either an hourly rate or a day rate are required");
      return;
    } else if (this.state.client === "") {
      console.log("the client must have a name");
      return;
    } else {
      const newClient = {
        clientName: this.state.clientName,
        contactName: this.state.contactName,
        phone: this.state.phone,
        hrRate: this.state.hrRate,
        dayRate: this.state.dayRate,
        otRate: this.state.otRate
      };
      this.handleCreate(newClient);
    }
  };

  handleCreate = async clientObj => {
    const docRef = await firestore.collection("clients").add(clientObj);
    return docRef;
  };

  clearState = () => {
    this.setState({
      clientName: "",
      clientNameInvalid: true,
      contactName: "",
      phone: "",
      hrRate: "",
      dayRate: "",
      otRate: "",
      rateInvalid: true
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.validate();
    this.clearState();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRequiredFieldChange = event => {
    const { name, value } = event.target;
    const invalidName = `${name}Invalid`;
    this.setState({ [name]: value });
    if (value === "") {
      this.setState({ [invalidName]: true });
    } else {
      this.setState({ [invalidName]: false });
    }
  };
  render() {
    const {
      clientName,
      clientNameInvalid,
      contactName,
      phone,
      hrRate,
      dayRate,
      rateInvalid,
      otRate
    } = this.state;
    return (
      <Container>
        <Row>
          <Col md="12" lg="6" className="addForm shadow">
            <h3 className="text-center formTitle">
              Add a New Client to your Client List
            </h3>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="clientName">Name</Label>
                <Input
                  type="text"
                  name="clientName"
                  value={clientName}
                  onChange={this.handleRequiredFieldChange}
                  id="clientName"
                  className="shadow p-3 bg-light rounded"
                  invalid={clientNameInvalid}
                  valid={!clientNameInvalid}
                />
                <FormText>
                  {clientNameInvalid ? "required field" : "👍🏽  Looks Good"}
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="contactName">Main Contact</Label>
                <Input
                  type="text"
                  name="contactName"
                  value={contactName}
                  onChange={this.handleChange}
                  id="contactName"
                  className="shadow p-3 bg-light rounded"
                />
                <Label for="contactPhone">Contacts Phone</Label>
                <Input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                  id="contactTel"
                  className="shadow p-3 bg-light rounded"
                />
              </FormGroup>
              <FormGroup>
                <Label for="hourlyRate">Hourly Rate</Label>
                <Input
                  type="number"
                  name="hrRate"
                  value={hrRate}
                  onChange={this.handleChange}
                  className="shadow p-3 bg-light rounded"
                />
                <Label for="dayRate">Day Rate</Label>
                <Input
                  type="number"
                  value={dayRate}
                  name="dayRate"
                  onChange={this.handleChange}
                  className="shadow p-3 bg-light rounded"
                />
                <Label for="overTimeRate">Overtime Rate</Label>
                <Input
                  type="number"
                  name="otRate"
                  value={otRate}
                  onChange={this.handleChange}
                  className="shadow p-3 bg-light rounded"
                />
              </FormGroup>
            </Form>
            <Button
              type="button"
              onClick={this.handleSubmit}
              className="btn btn-success shadow formButton">
              Add a New Client
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
