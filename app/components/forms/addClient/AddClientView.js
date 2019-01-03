import React from "react";
import PropTypes from "prop-types";
import { Col, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default function AddClientView(props) {
  return (
    <div className="container siteText">
      <div className="row">
        <Col md="8" lg="6" className="addForm shadow">
          <h3 className="text-center formTitle">Add a New Client</h3>
          <Form onSubmit={props.handleSubmit}>
            <FormGroup>
              <Label for="clientName">Name</Label>
              <Input
                type="text"
                name="clientName"
                value={props.clientName}
                onChange={props.handleRequiredFieldChange}
                id="clientName"
                className="shadow p-3 bg-light rounded"
                invalid={props.clientNameInvalid}
                valid={!props.clientNameInvalid}
              />
              <FormText>
                {props.clientNameInvalid ? "required field" : "👍🏽  Looks Good"}
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="contactName">Main Contact</Label>
              <Input
                type="text"
                name="contactName"
                value={props.contactName}
                onChange={props.handleChange}
                id="contactName"
                className="shadow p-3 bg-light rounded"
              />
              <Label for="contactPhone">Contacts Phone</Label>
              <Input
                type="tel"
                name="phone"
                value={props.phone}
                onChange={props.handleChange}
                id="contactTel"
                className="shadow p-3 bg-light rounded"
              />
            </FormGroup>
            <FormGroup>
              <Label for="hourlyRate">Hourly Rate</Label>
              <Input
                type="number"
                name="hrRate"
                value={props.hrRate}
                onChange={props.handleChange}
                className="shadow p-3 bg-light rounded"
              />
              <Label for="dayRate">Day Rate</Label>
              <Input
                type="number"
                value={props.dayRate}
                name="dayRate"
                onChange={props.handleChange}
                className="shadow p-3 bg-light rounded"
              />
              <Label for="overTimeRate">Overtime Rate</Label>
              <Input
                type="number"
                name="otRate"
                value={props.otRate}
                onChange={props.handleChange}
                className="shadow p-3 bg-light rounded"
              />
            </FormGroup>
          </Form>
          <button
            type="button"
            onClick={props.handleSubmit}
            className="btn btn-success shadow formButton">
            Add a New Client
          </button>
        </Col>
      </div>
    </div>
  );
}

AddClientView.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleRequiredFieldChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  clientName: PropTypes.string,
  contactName: PropTypes.string,
  phone: PropTypes.string,
  hrRate: PropTypes.string,
  otRate: PropTypes.string,
  dayRate: PropTypes.string,
  clientNameInvalid: PropTypes.bool,
  rateInvalid: PropTypes.bool
};
