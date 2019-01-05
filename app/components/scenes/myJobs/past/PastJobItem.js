import React from "react";
import { removeJob } from "../../../../actions/actions";
import { connect } from "react-redux";
import { formatDate, dollarFormat } from "../../../../utilities";
import { renderPaymentTD } from "../utils/myJobFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import Item from "./views/Item";

class PastJobItem extends React.Component {
  handleRemove = jobID => {
    const { removeJob } = this.props;
    removeJob(jobID);
  };
  renderModalWithJob = jobObj => {
    console.log("Edit Icon clicked");
    this.props.updateCurrentJob(jobObj);
    this.props.toggle();
  };

  render() {
    const { job } = this.props;
    return (
      <Item
        job={job}
        handleRemove={this.handleRemove}
        renderModalWithJob={this.renderModalWithJob}
      />
    );
  }
}

export default connect(
  null,
  { removeJob }
)(PastJobItem);
