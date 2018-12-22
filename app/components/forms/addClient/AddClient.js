import React from "react";
import PropTypes from "prop-types";
import AddClientView from "./AddClientView";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Label,
  FormGroup,
  FormText,
  Button
} from "reactstrap";
import { firestore, auth } from "../../../firebase";
import { toHtml } from "@fortawesome/fontawesome-svg-core";

export default class AddClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: "",
      clientNameInvalid: true,
      contactName: "",
      phone: "",
      hrRate: "",
      dayRate: "",
      otRate: "",
      rateInvalid: true
    };
  }

  validate = () => {
    if (this.state.hrRate === "" && this.state.dayRate === "") {
      console.log("either an hourly rate or a day rate are required");
      return;
    } else if (this.state.client === "") {
      console.log("the client must have a name");
      return;
    } else {
      const newClient = {
        clientName: this.state.clientName,
        contactName: this.state.contactName,
        phone: this.state.phone,
        hrRate: this.state.hrRate,
        dayRate: this.state.dayRate,
        otRate: this.state.otRate
      };
      this.handleCreate(newClient);
    }
  };

  handleCreate = async clientObj => {
    const uid = this.props.location.state.uid;
    const docRef = await firestore
      .collection(`users/${uid}/clients`)
      .add(clientObj);
    return docRef;
  };

  clearState = () => {
    this.setState({
      clientName: "",
      clientNameInvalid: true,
      contactName: "",
      phone: "",
      hrRate: "",
      dayRate: "",
      otRate: "",
      rateInvalid: true
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.validate();
    this.clearState();
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRequiredFieldChange = event => {
    const { name, value } = event.target;
    const invalidName = `${name}Invalid`;
    this.setState({ [name]: value });
    if (value === "") {
      this.setState({ [invalidName]: true });
    } else {
      this.setState({ [invalidName]: false });
    }
  };
  render() {
    const state = this.state;
    return (
      <AddClientView
        handleChange={this.handleChange}
        handleRequiredFieldChange={this.handleRequiredFieldChange}
        handleSubmit={this.handleSubmit}
        {...state}
      />
    );
  }
}
