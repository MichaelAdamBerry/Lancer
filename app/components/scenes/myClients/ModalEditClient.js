import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import EditClientForm from "../../forms/editClient/EditClientForm";

export default class ModalClientModal extends React.Component {
  render() {
    console.log("EditClientModal props", this.props);
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader> Edit Job</ModalHeader>
        <ModalBody>
          <EditClientForm
            toggle={this.props.toggle}
            currentClient={this.props.currentClient}
          />
        </ModalBody>
      </Modal>
    );
  }
}
