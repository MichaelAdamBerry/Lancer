import React from "react";
import { connect } from "react-redux";
import EditClientFormView from "./EditClientFormView";
import * as actions from "../../../actions/actions";

class EditClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.currentClient };
  }

  handleEditSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const editClient = this.props.editClient;
    const clientObj = {
      ...this.state
    };

    editClient(this.state.id, { ...clientObj });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const state = this.state;
    return (
      <EditClientFormView
        handleChange={this.handleChange}
        handleEditSubmit={this.handleEditSubmit}
        {...state}
      />
    );
  }
}

export default connect(
  null,
  actions
)(EditClientForm);
