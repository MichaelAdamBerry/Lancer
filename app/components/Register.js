import React from "react";
import { Redirect } from "react-router-dom";
//TODO register form
//place holder toDash function redirects to dashboard and does not save data
export default class Register extends React.Component {
  state = { redirectToDash: false };
  toDash = () => {
    this.setState({ redirectToDash: true });
  };
  render() {
    const registered = this.state.redirectToDash;
    return (
      <div>
        {registered === true ? (
          <Redirect to="./dashboard" />
        ) : (
          <div>
            {" "}
            <h3>register component</h3>
            <button onClick={this.toDash}>Sign Me Up</button>
          </div>
        )}
      </div>
    );
  }
}
