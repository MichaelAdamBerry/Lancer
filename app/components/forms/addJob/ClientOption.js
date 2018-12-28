import React from "react";

export default class ClientOption extends React.Component {
  render() {
    const { client } = this.props;
    return <option>{client.clientName}</option>;
  }
}
