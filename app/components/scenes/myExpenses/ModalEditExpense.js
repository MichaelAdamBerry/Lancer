import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import EditExpenseForm from "../../forms/editExpense/EditExpenseForm";

export default class ModalExpenseModal extends React.Component {
  render() {
    console.log("EditExpenseModal props", this.props);
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader> Edit Job</ModalHeader>
        <ModalBody>
          <EditExpenseForm
            toggle={this.props.toggle}
            currentExpense={this.props.currentExpense}
          />
        </ModalBody>
      </Modal>
    );
  }
}
