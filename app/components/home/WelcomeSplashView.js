import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default function WelcomeSplashView({
  showWelcomeSplash,
  toggleShowWelcomeSplash,
  toggleAndRedirect,
  displayName
}) {
  return (
    <Modal isOpen={showWelcomeSplash} toggle={toggleShowWelcomeSplash}>
      <ModalBody>
        <h4>Welcome back, {displayName}</h4>
        <button onClick={toggleAndRedirect}>View Your Dashboard</button>
      </ModalBody>
    </Modal>
  );
}
