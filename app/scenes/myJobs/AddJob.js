import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
export default class AddJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: "",
      date: "",
      rate: "",
      startTime: "",
      endTime: "",
      location: "",
      notes: ""
    };
  }

  clearState = () => {
    this.setState({
      client: "",
      date: "",
      rate: "",
      startTime: "",
      endTime: "",
      location: "",
      notes: ""
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.client || !this.state.date || !this.state.rate) {
      console.log("Client Name, Date, and Rate Type are all required fields");
      return;
    } else {
      console.log(this.state);
      this.clearState();
    }
  };

  handleClientChange = event => {
    const value = event.target.value;
    this.setState({ client: value });
  };

  handleDateChange = event => {
    const value = event.target.value;
    this.setState({ date: value });
  };

  handleRateChange = event => {
    const value = event.target.value;
    this.setState({ rate: value });
  };

  handleStartTimeChange = event => {
    const value = event.target.value;
    this.setState({ startTime: value });
  };

  handleEndTimeChange = event => {
    const value = event.target.value;
    this.setState({ endTime: value });
  };

  handleLocationChange = event => {
    const value = event.target.value;
    this.setState({ location: value });
  };

  handleNotesChange = event => {
    const value = event.target.value;
    this.setState({ notes: value });
  };

  render() {
    const {
      client,
      date,
      rate,
      startTime,
      endTime,
      location,
      notes
    } = this.state;
    return (
      <Container>
        <Row>
          <Col md="8" lg="6">
            <h3>Record a New Job</h3>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="clientName">Name</Label>
                <Input
                  type="select"
                  value={client}
                  onChange={this.handleClientChange}
                  name="clientName"
                  id="clientName">
                  <option>choose a client</option>
                  <option>Example one</option>
                  <option>Example two</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="Date">Date</Label>
                <Input
                  type="date"
                  name="date"
                  value={date}
                  onChange={this.handleDateChange}
                  id="Date"
                  placeholder="date placeholder"
                />
              </FormGroup>
              <Label for="Rate">Rate Type</Label>
              <Input
                type="select"
                value={rate}
                onChange={this.handleRateChange}
                name="rateType"
                id="rateType">
                <option>Hourly</option>
                <option>Day Rate</option>
                <option>Multi-day Job Rate</option>
              </Input>
              <FormGroup>
                <Label for="StartTme">Start Time</Label>
                <Input
                  type="time"
                  value={startTime}
                  onChange={this.handleStartTimeChange}
                  name="time"
                  id="StartTime"
                  placeholder="time placeholder"
                />
                <Label for="EndTime">End Time</Label>
                <Input
                  type="time"
                  name="time"
                  value={endTime}
                  onChange={this.handleEndTimeChange}
                  id="EndTime"
                  placeholder="time placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="location">Location</Label>
                <Input
                  type="text"
                  value={location}
                  onChange={this.handleLocationChange}
                  name="location"
                  id="location"
                />
              </FormGroup>
              <FormGroup>
                <Label for="textArea">Notes</Label>
                <Input
                  type="textarea"
                  value={notes}
                  onChange={this.handleNotesChange}
                  name="notes"
                  id="notes"
                />
              </FormGroup>
            </Form>
            <Button
              type="button"
              className="btn btn-success"
              onClick={this.handleSubmit}>
              Submit Job
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
