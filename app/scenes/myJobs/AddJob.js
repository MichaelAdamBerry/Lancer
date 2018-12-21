import React from "react";
import { firestore, auth } from "../../../app/firebase";
import { collectIdsAndDocs } from "../../../app/utilities";
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

export default class AddJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paid: false,
      client: "",
      clientInvalid: true,
      date: "",
      dateInvalid: true,
      rate: "",
      rateInvalid: true,
      startTime: "",
      endTime: "",
      location: "",
      notes: ""
    };
  }

  clearState = () => {
    this.setState({
      clientInvalid: true,
      client: "",
      date: "",
      dateInvalid: true,
      rate: "",
      rateInvalid: true,
      startTime: "",
      endTime: "",
      location: "",
      notes: ""
    });
  };

  unsubscribe = null;

  componentDidMount = async () => {
    const uid = "user";
    this.setState({ uid });
    this.unsubscribe = await firestore
      .collection(`users/${uid}/clients`)
      .onSnapshot(snapshot => {
        const clientData = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ clientData });
      });
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleCreate = async newJob => {
    const uid = "users";
    const docRef = await firestore.collection(`users/${uid}/jobs`).add(newJob);
    return docRef;
  };

  handleSubmit = event => {
    event.preventDefault();
    const job = {
      client: this.state.client,
      date: this.state.date,
      rate: this.state.rate,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      location: this.state.location,
      notes: this.state.notes
    };
    this.validateForm();
    if (!this.state.client || !this.state.date || !this.state.rate) {
      console.log("Client Name, Date, and Rate Type are all required fields");
      return;
    } else {
      this.handleCreate(job);
      this.clearState();
    }
  };

  validateForm = () => {
    if (!this.state.client) {
      this.setState({ clientInvalid: true });
    } else if (!this.state.date) {
      this.setState({ dateInvalid: true });
    } else if (!this.state.rate) {
      this.setState({ rateInvalid: true });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRequiredFieldChange = event => {
    const { name, value } = event.target;
    const nameInvalid = `${name}Invalid`;
    this.setState({ [name]: value, [nameInvalid]: false });
  };

  render() {
    const {
      client,
      clientInvalid,
      date,
      dateInvalid,
      rate,
      rateInvalid,
      startTime,
      endTime,
      location,
      notes,
      clientData
    } = this.state;
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
                  placeholder="pick a client"
                  name="client"
                  onChange={this.handleRequiredFieldChange}
                  id="client"
                  invalid={clientInvalid}
                  valid={!clientInvalid}>
                  <option />
                  {!clientData
                    ? null
                    : clientData.map(client => {
                        return (
                          <option key={client.id}>{client.clientName}</option>
                        );
                      })}
                </Input>
                <FormText className="text-right">
                  {clientInvalid ? "required field" : "👍🏽  Looks Good"}
                </FormText>
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
                  invalid={dateInvalid}
                  valid={!dateInvalid}
                />
                <FormText className="text-right">
                  {dateInvalid ? "** required field" : "👍🏽 Looks Good"}
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="Rate">Rate Type</Label>
                <Input
                  className="shadow p-3 bg-light rounded"
                  type="select"
                  value={rate}
                  onChange={this.handleRequiredFieldChange}
                  name="rate"
                  id="rate"
                  invalid={rateInvalid}
                  valid={!rateInvalid}>
                  <option disabled>Choose One</option>
                  <option>Hourly</option>
                  <option>Day Rate</option>
                  <option>Multi-day Job Rate</option>
                </Input>
                <FormText className="text-right">
                  {rateInvalid ? "** required field" : "👍🏽 Looks Good"}
                </FormText>
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
              onClick={this.handleSubmit}>
              Submit Job
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
