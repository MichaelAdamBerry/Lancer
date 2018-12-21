import React from "react";
import { firestore } from "../../../app/firebase";
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  FormGroup,
  FormText,
  Input,
  Button
} from "reactstrap";
import PropTypes from "prop-types";

export default class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "",
      priceInvalid: true,
      client: "",
      clientInvalid: true,
      description: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { price, client, description } = this.state;
    const expenseObj = {
      price: price,
      client: client,
      description: description
    };
    this.handleCreate(expenseObj);
    this.setState({ price: "", client: "", description: "" });
  };

  handleCreate = async expenseObj => {
    const uid = "user";
    const docRef = await firestore
      .collection(`users/${uid}/expenses`)
      .add(expenseObj);
    return docRef;
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRequiredFieldChange = event => {
    const { name, value } = event.target;
    const invalidName = `${name}Invalid`;
    if (value === "") {
      this.setState({ [name]: value, [invalidName]: true });
    } else {
      this.setState({ [name]: value, [invalidName]: false });
    }
  };
  render() {
    const {
      price,
      client,
      clientInvalid,
      priceInvalid,
      description
    } = this.state;
    return (
      <Container>
        <Row>
          <Col sm="12" md="8" lg="6" className="addForm shadow">
            <h3 className="text-center siteText formTitle">
              Record a New Expense
            </h3>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="jobSelect">Client</Label>
                <Input
                  invalid={clientInvalid}
                  valid={!clientInvalid}
                  type="select"
                  value={client}
                  onChange={this.handleRequiredFieldChange}
                  id="jobSelect"
                  className="shadow p-3 bg-light rounded"
                  name="client">
                  <option disabled>select client to be billed</option>
                  <option>Job A</option>
                  <option>Job B</option>
                  <option>Job C</option>
                </Input>
                <FormText className="text-right">
                  {clientInvalid ? "** required field" : "👍🏽 Looks Good"}{" "}
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="description">Describe Expense</Label>
                <Input
                  type="textarea"
                  value={description}
                  onChange={this.handleChange}
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
                    invalid={priceInvalid}
                    valid={!priceInvalid}
                    type="text"
                    value={price}
                    name="price"
                    className="form-control shadow p-3 bg-light rounded"
                    onChange={this.handleRequiredFieldChange}
                    aria-label="Amount"
                  />
                </div>
                <FormText className="text-right">
                  {priceInvalid ? "** required field" : "👍🏽 Looks Good"}{" "}
                </FormText>
              </FormGroup>
            </Form>
            <Button
              type="button"
              onClick={this.handleSubmit}
              className="btn btn-success formButton">
              Save Expense
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
