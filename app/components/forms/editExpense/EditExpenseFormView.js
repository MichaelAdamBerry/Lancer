import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Col, Form, Label, FormGroup, FormText, Input } from "reactstrap";
import ClientOption from "../inputComponents/ClientOption";

export default class EditExpenseFormView extends React.Component {
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
          <div className="modalForm">
            <h3 className="text-center formTitle">Edit Expense</h3>
            <Form onSubmit={this.props.handleEditSubmit}>
              <FormGroup>
                <Label for="jobSelect">Client</Label>
                <Input
                  type="select"
                  value={this.props.client}
                  onChange={this.props.handleChange}
                  id="jobSelect"
                  className="shadow bg-light rounded"
                  name="client">
                  {this.renderClientOptions()}
                </Input>
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
                    type="text"
                    value={this.props.price}
                    name="price"
                    className="form-control shadow p-3 bg-light rounded"
                    onChange={this.props.handleChange}
                    aria-label="Amount"
                  />
                </div>
              </FormGroup>
            </Form>
            <button
              type="button"
              onClick={this.props.handleEditSubmit}
              className="btn btn-success formButton">
              Update Expense
            </button>
          </div>
        </div>
      </div>
    );
  }
}

EditExpenseFormView.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleEditSubmit: PropTypes.func.isRequired,
  price: PropTypes.string,
  client: PropTypes.string,
  description: PropTypes.string
};
