import { Alert } from "reactstrap";
import PropTypes from "prop-types";
import React from "react";

export default class SuccessAlert extends React.Component {
  state = { isOpen: this.props.isOpen };

  static defaultProps = {
    isOpen: true,
    message: "form was submitted Successfully"
  };
  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  componentDidMount() {
    setTimeout(() => this.toggle(), 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.toggle);
  }

  render() {
    const { message } = this.props;
    const { isOpen } = this.state;

    return (
      <Alert className="formSuccessAlert" isOpen={isOpen} color="success">
        <div>
          <p>{message}</p>
        </div>
      </Alert>
    );
  }
}
