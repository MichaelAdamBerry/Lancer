import { Alert } from "reactstrap";
import PropTypes from "prop-types";
import React from "react";

export default class SuccessAlert extends React.Component {
  state = { isOpen: this.props.isOpen };

  static defaultProps = {
    isOpen: true,
    message: "form was submitted Successfully",
    toggle: () => this.setState({ isOpen: !this.state.isOpen })
  };

  componentWillMount() {
    setTimeout(() => {
      this.setState({ isOpen: false });
    }, 2000);
  }
  componentWillUnmount() {
    clearTimeout();
  }

  render() {
    const { toggle, message } = this.props;
    const { isOpen } = this.state;
    return (
      <Alert
        className="formSuccessAlert"
        isOpen={isOpen}
        color="success"
        toggle={toggle}>
        <div>
          <p>{message}</p>
        </div>
      </Alert>
    );
  }
}
