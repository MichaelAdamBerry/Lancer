import React from "react";

export default class ClientOption extends React.Component {
  render() {
    const { client } = this.props;
    const { id } = this.props.client.id;
    return <option>{client.clientName}</option>;
  }
}
