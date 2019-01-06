import { Alert } from "reactstrap";
import PropTypes from "prop-types";
import React from "react";

export default class ErrorAlert extends React.Component {
  state = { isOpen: this.props.isOpen };

  static defaultProps = {
    isOpen: true,
    message:
      "Form could not be submitted. Double check required fields and that the start time is before the end time"
  };
  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { message } = this.props;
    const { isOpen } = this.state;

    return (
      <Alert className="formErrorAlert" isOpen={isOpen} color="danger">
        <div>
          <p>{message}</p>
        </div>
      </Alert>
    );
  }
}
