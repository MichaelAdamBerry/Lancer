import React from "react";

export default class EditJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.job
    };
  }

  render() {
    const { date, rate, startTime, endTime, location, notes } = this.props.job;
    return (
      <Container>
        <Row>
          <Col md="8" lg="6" className="addForm shadow">
            <h3 className="text-center siteText formTitle">Record a New Job</h3>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="client">Name</Label>
                <Input
                  className="shadow p-3 bg-light rounded"
                  type="select"
                  value={client}
                  name="client"
                  onChange={this.handleRequiredFieldChange}
                  id="client">
                  <option disabled>pick one</option>
                  <option>Example one</option>
                  <option>Example two</option>
                  <option>Example three</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="Date">Date</Label>
                <Input
                  className="shadow p-3  bg-light rounded"
                  type="date"
                  name="date"
                  value={date}
                  onChange={this.handleRequiredFieldChange}
                  id="Date"
                  placeholder="date placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Rate">Rate Type</Label>
                <Input
                  className="shadow p-3 bg-light rounded"
                  type="select"
                  value={rate}
                  onChange={this.handleRequiredFieldChange}
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
                  value={startTime}
                  onChange={this.handleChange}
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
                  value={endTime}
                  onChange={this.handleChange}
                  id="EndTime"
                  placeholder="time placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="location">Location</Label>
                <Input
                  className="shadow p-3 bg-light rounded"
                  type="text"
                  value={location}
                  onChange={this.handleChange}
                  name="location"
                  id="location"
                />
              </FormGroup>
              <FormGroup>
                <Label for="textArea">Notes</Label>
                <Input
                  className="shadow p-3 bg-light rounded"
                  type="textarea"
                  value={notes}
                  onChange={this.handleChange}
                  name="notes"
                  id="notes"
                />
              </FormGroup>
            </Form>
            <Button
              type="button"
              className="btn btn-success shadow p-3 rounded formButton"
              onClick={this.props.handleUpdate}>
              Submit Job
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
