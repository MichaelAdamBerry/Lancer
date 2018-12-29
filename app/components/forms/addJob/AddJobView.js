import React from "react";
import PropTypes from "prop-types";
import ClientOption from "./ClientOption";
import _ from "lodash";
import { Col, Form, FormGroup, FormText, Label, Input } from "reactstrap";

export default class AddJobView extends React.Component {
  renderClientOptions = () => {
    const { clientData } = this.props;
    if (clientData != "") {
      const clientArr = _.map(clientData, (value, key) => {
        return <ClientOption key={key} client={value} />;
      });
      if (!_.isEmpty(clientArr)) {
        return clientArr;
      }
      return (
        <option className="disabled">
          Add a Client First to Create a New Job
        </option>
      );
    } else {
      return <option>loading...</option>;
    }
  };
  render() {
    return (
      <div className="container siteText">
        <div className="row">
          <Col md="8" lg="6" className="addForm shadow">
            <h3 className="text-center formTitle">Record a New Job</h3>
            <Form onSubmit={this.props.handleSubmit}>
              <FormGroup>
                <Label for="client">Name</Label>
                <Input
                  className="shadow p-3 bg-light rounded"
                  type="select"
                  value={this.props.client}
                  placeholder="pick a client"
                  name="client"
                  onChange={this.props.handleRequiredFieldChange}
                  id="client"
                  invalid={this.props.clientInvalid}
                  valid={!this.props.clientInvalid}>
                  {this.renderClientOptions()}
                </Input>
                <FormText className="text-right">
                  {this.props.clientInvalid
                    ? "required field"
                    : "👍🏽  Looks Good"}
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="Date">Date</Label>
                <Input
                  className="shadow p-3  bg-light rounded"
                  type="date"
                  name="date"
                  value={this.props.date}
                  onChange={this.props.handleRequiredFieldChange}
                  id="Date"
                  placeholder="date placeholder"
                  invalid={this.props.dateInvalid}
                  valid={!this.props.dateInvalid}
                />
                <FormText className="text-right">
                  {this.props.dateInvalid
                    ? "** required field"
                    : "👍🏽 Looks Good"}
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="Rate">Rate Type</Label>
                <Input
                  className="shadow p-3 bg-light rounded"
                  type="select"
                  value={this.props.rate}
                  onChange={this.props.handleRequiredFieldChange}
                  name="rate"
                  id="rate"
                  invalid={this.props.rateInvalid}
                  valid={!this.props.rateInvalid}>
                  <option disabled>Choose One</option>
                  <option>Hourly</option>
                  <option>Day Rate</option>
                  <option>Multi-day Job Rate</option>
                </Input>
                <FormText className="text-right">
                  {this.props.rateInvalid
                    ? "** required field"
                    : "👍🏽 Looks Good"}
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="StartTme">Start Time</Label>
                <Input
                  className="shadow p-3 bg-light rounded"
                  type="time"
                  value={this.props.startTime}
                  onChange={this.props.handleChange}
                  name="startTime"
                  id="startTime"
                  placeholder="time placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="EndTime">End Time</Label>
                <Input
                  className="shadow p-3 bg-light rounded"
                  type="time"
                  name="endTime"
                  value={this.props.endTime}
                  onChange={this.props.handleChange}
                  id="EndTime"
                  placeholder="time placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="location">Location</Label>
                <Input
                  className="shadow p-3 bg-light rounded"
                  type="text"
                  value={this.props.location}
                  onChange={this.props.handleChange}
                  name="location"
                  id="location"
                />
              </FormGroup>
              <FormGroup>
                <Label for="textArea">Notes</Label>
                <Input
                  className="shadow p-3 bg-light rounded"
                  type="textarea"
                  value={this.props.notes}
                  onChange={this.props.handleChange}
                  name="notes"
                  id="notes"
                />
              </FormGroup>
            </Form>
            <button
              type="button"
              className="btn btn-success shadow p-3 rounded formButton"
              onClick={this.props.handleSubmit}>
              Submit Job
            </button>
          </Col>
        </div>
      </div>
    );
  }
}

AddJobView.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleRequiredFieldChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  client: PropTypes.string,
  date: PropTypes.string,
  rate: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  location: PropTypes.string,
  notes: PropTypes.string,
  clientInvalid: PropTypes.bool,
  dateInvalid: PropTypes.bool,
  rateInvalid: PropTypes.bool
};
