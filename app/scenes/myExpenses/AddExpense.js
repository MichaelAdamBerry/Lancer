import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Label,
  FormGroup,
  Input,
  Button
} from "reactstrap";
import Nav from "../dashboard/components/Nav";

export default class AddExpense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: "",
      client: "Job A",
      description: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.state.price === ""
      ? console.log("include a price")
      : console.log(this.state);
    this.setState({ client: "Job A", price: "", description: "" });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { price, client, description } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <h3>Record a New Expense</h3>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="8" lg="6">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="jobSelect">Select Client</Label>
                <Input
                  type="select"
                  value={client}
                  onChange={this.handleChange}
                  id="jobSelect"
                  name="client">
                  <option>Job A</option>
                  <option>Job B</option>
                  <option>Job C</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="description">Describe Expense</Label>
                <Input
                  type="textarea"
                  value={description}
                  onChange={this.handleChange}
                  name="description"
                  id="description"
                />
              </FormGroup>
              <FormGroup>
                <Label for="amount">Price</Label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    type="text"
                    value={price}
                    name="price"
                    className="form-control"
                    onChange={this.handleChange}
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
              </FormGroup>
            </Form>
            <Button
              type="button"
              onClick={this.handleSubmit}
              className="btn btn-success">
              Save Expense
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
