import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EditJobForm from "../../forms/editJob/EditJobForm";

export default class EditJobModal extends React.Component {
  render() {
    console.log("EditJobModal props", this.props);
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader> Edit Job</ModalHeader>
        <ModalBody>
          <EditJobForm
            toggle={this.props.toggle}
            currentJob={this.props.currentJob}
          />
        </ModalBody>
      </Modal>
    );
  }
}
