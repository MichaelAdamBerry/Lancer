import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Col, Form, Label, FormGroup, FormText, Input } from "reactstrap";
import ClientOption from "../inputComponents/ClientOption";

export default class AddExpenseView extends React.Component {
  renderClientOptions = () => {
    const { clients } = this.props;
    const clientArr = _.map(clients, (value, key) => {
      return <ClientOption key={key} client={value} />;
    });
    if (this.props.clients) {
      return clientArr;
    }
    return (
      <option className="disabled">
        You must add a client before creating a new expense
      </option>
    );
  };

  render() {
    return (
      <div className="container siteText">
        <div className="row">
          <Col sm="12" md="8" lg="6" className="addForm shadow">
            <h3 className="text-center formTitle">Record a New Expense</h3>
            <Form onSubmit={this.props.handleSubmit}>
              <FormGroup>
                <Label for="jobSelect">Client</Label>
                <Input
                  invalid={this.props.clientInvalid}
                  valid={!this.props.clientInvalid}
                  type="select"
                  value={this.props.client}
                  onChange={this.props.handleRequiredFieldChange}
                  id="jobSethis.props.lect"
                  className="shadow p-3 bg-light rounded"
                  name="client">
                  <option className="text-muted">Choose a Client</option>
                  {this.renderClientOptions()}
                </Input>
                <FormText className="text-right">
                  {this.props.clientInvalid
                    ? "** required field"
                    : "👍🏽 Looks Good"}{" "}
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="description">Describe Expense</Label>
                <Input
                  type="textarea"
                  value={this.props.description}
                  onChange={this.props.handleChange}
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
                    invalid={this.props.priceInvalid}
                    valid={!this.props.priceInvalid}
                    type="text"
                    value={this.props.price}
                    name="price"
                    className="form-control shadow p-3 bg-light rounded"
                    onChange={this.props.handleRequiredFieldChange}
                    aria-label="Amount"
                  />
                </div>
                <FormText className="text-right">
                  {this.props.priceInvalid
                    ? "** required field"
                    : "👍🏽 Looks Good"}{" "}
                </FormText>
              </FormGroup>
            </Form>
            <button
              type="button"
              onClick={this.props.handleSubmit}
              className="btn btn-success formButton">
              Save Expense
            </button>
          </Col>
        </div>
      </div>
    );
  }
}

AddExpenseView.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleRequiredFieldChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  price: PropTypes.string,
  client: PropTypes.string,
  description: PropTypes.string,
  priceInvalid: PropTypes.bool,
  clientInvalid: PropTypes.bool
};
