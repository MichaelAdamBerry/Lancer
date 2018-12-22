import React from "react";
import { firestore, auth } from "../../../firebase";
import AddJobView from "./AddJobView";
import { collectIdsAndDocs } from "../../../utilities";

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
    const state = this.state;
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
      <AddJobView
        handleChange={this.handleChange}
        handleRequiredFieldChange={this.handleRequiredFieldChange}
        handleSubmit={this.handleSubmit}
        {...state}
      />
    );
  }
}
