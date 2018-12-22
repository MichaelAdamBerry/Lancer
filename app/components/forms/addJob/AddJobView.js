import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button
} from "reactstrap";

export default function AddJobView(props) {
  return (
    <Container>
      <Row>
        <Col md="8" lg="6" className="addForm shadow">
          <h3 className="text-center siteText formTitle">Record a New Job</h3>
          <Form onSubmit={props.handleSubmit}>
            <FormGroup>
              <Label for="client">Name</Label>
              <Input
                className="shadow p-3 bg-light rounded"
                type="select"
                value={props.client}
                placeholder="pick a client"
                name="client"
                onChange={props.handleRequiredFieldChange}
                id="client"
                invalid={props.clientInvalid}
                valid={!props.clientInvalid}>
                <option />
                {!props.clientData
                  ? null
                  : props.clientData.map(client => {
                      return (
                        <option key={client.id}>{client.clientName}</option>
                      );
                    })}
              </Input>
              <FormText className="text-right">
                {props.clientInvalid ? "required field" : "👍🏽  Looks Good"}
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="Date">Date</Label>
              <Input
                className="shadow p-3  bg-light rounded"
                type="date"
                name="date"
                value={props.date}
                onChange={props.handleRequiredFieldChange}
                id="Date"
                placeholder="date placeholder"
                invalid={props.dateInvalid}
                valid={!props.dateInvalid}
              />
              <FormText className="text-right">
                {props.dateInvalid ? "** required field" : "👍🏽 Looks Good"}
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="Rate">Rate Type</Label>
              <Input
                className="shadow p-3 bg-light rounded"
                type="select"
                value={props.rate}
                onChange={props.handleRequiredFieldChange}
                name="rate"
                id="rate"
                invalid={props.rateInvalid}
                valid={!props.rateInvalid}>
                <option disabled>Choose One</option>
                <option>Hourly</option>
                <option>Day Rate</option>
                <option>Multi-day Job Rate</option>
              </Input>
              <FormText className="text-right">
                {props.rateInvalid ? "** required field" : "👍🏽 Looks Good"}
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="StartTme">Start Time</Label>
              <Input
                className="shadow p-3 bg-light rounded"
                type="time"
                value={props.startTime}
                onChange={props.handleChange}
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
                value={props.endTime}
                onChange={props.handleChange}
                id="EndTime"
                placeholder="time placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input
                className="shadow p-3 bg-light rounded"
                type="text"
                value={props.location}
                onChange={props.handleChange}
                name="location"
                id="location"
              />
            </FormGroup>
            <FormGroup>
              <Label for="textArea">Notes</Label>
              <Input
                className="shadow p-3 bg-light rounded"
                type="textarea"
                value={props.notes}
                onChange={props.handleChange}
                name="notes"
                id="notes"
              />
            </FormGroup>
          </Form>
          <Button
            type="button"
            className="btn btn-success shadow p-3 rounded formButton"
            onClick={props.handleSubmit}>
            Submit Job
          </Button>
        </Col>
      </Row>
      props.r
    </Container>
  );
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
  rateInvalid: PropTypes.bool,
  clientData: PropTypes.array
};
