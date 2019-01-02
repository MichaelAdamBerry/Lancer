import React from "react";
import PropTypes from "prop-types";
import ClientOption from "../inputComponents/ClientOption";
import _ from "lodash";
import { Col, Form, FormGroup, FormText, Label, Input } from "reactstrap";

export default class EditJobFormView extends React.Component {
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
        Add a Client First to Create a New Job
      </option>
    );
  };
  render() {
    return (
      <div className="container siteText">
        <div className="row">
          <div className="addForm shadow">
            <Form onSubmit={this.props.handleSubmit}>
              <FormGroup>
                <Label for="client">Name</Label>
                <Input
                  className="shadow bg-light rounded"
                  type="select"
                  value={this.props.client}
                  placeholder="pick a client"
                  name="client"
                  onChange={this.props.handleChange}
                  id="client">
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
                  onChange={this.props.handleChange}
                  id="Date"
                  placeholder="date placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Rate">Rate Type</Label>
                <Input
                  className="shadow bg-light rounded"
                  type="select"
                  value={this.props.rate}
                  onChange={this.props.handleChange}
                  name="rate"
                  id="rate">
                  <option disabled>Choose One</option>
                  <option>Hourly</option>
                  <option>Day Rate</option>
                  <option>Multi-day Job Rate</option>
                </Input>
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
              onClick={this.props.handleEditSubmit}>
              Update Job
            </button>
          </div>
        </div>
      </div>
    );
  }
}
