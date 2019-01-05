import React from "react";
import PropTypes from "prop-types";
import { Col, Form, Label, FormGroup, FormText, Input } from "reactstrap";

export default function ExpenseFormView(props) {
  return (
    <div className="container siteText">
      <div className="row">
        <Col sm="12" md="8" lg="6" className="addForm shadow">
          <h3 className="text-center formTitle">Record a New Expense</h3>
          <Form onSubmit={props.handleSubmit}>
            <FormGroup>
              <Label for="jobSelect">Client</Label>
              <Input
                invalid={props.clientInvalid}
                valid={!props.clientInvalid}
                type="select"
                value={props.client}
                onChange={props.handleRequiredFieldChange}
                id="jobSeprops.lect"
                className="shadow p-3 bg-light rounded"
                name="client">
                <option className="text-muted">Choose a Client</option>
                {props.renderClientOptions()}
              </Input>
              <FormText className="text-right">
                {props.clientInvalid ? "** required field" : "👍🏽 Looks Good"}{" "}
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="description">Describe Expense</Label>
              <Input
                type="textarea"
                value={props.description}
                onChange={props.handleChange}
                name="description"
                id="description"
                className="shadow p-3 bg-light rounded"
              />
            </FormGroup>
            <FormGroup>
              <Label for="amount">Amount</Label>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <Input
                  invalid={props.priceInvalid}
                  valid={!props.priceInvalid}
                  type="text"
                  value={props.price}
                  name="price"
                  className="form-control shadow p-3 bg-light rounded"
                  onChange={props.handleRequiredFieldChange}
                  aria-label="Amount"
                />
              </div>
              <FormText className="text-right">
                {props.priceInvalid ? "** required field" : "👍🏽 Looks Good"}{" "}
              </FormText>
            </FormGroup>
          </Form>
          <button
            type="button"
            onClick={props.handleSubmit}
            className="btn btn-success formButton">
            Save Expense
          </button>
        </Col>
      </div>
    </div>
  );
}
ExpenseFormView.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleRequiredFieldChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  price: PropTypes.string,
  client: PropTypes.string,
  description: PropTypes.string,
  priceInvalid: PropTypes.bool,
  clientInvalid: PropTypes.bool
};
