import React from "react";
import ItemFutureView from "./views/ItemFutureView";
import { removeJob } from "../../../../actions/actions";
import { connect } from "react-redux";
//TODO propTypes

class FutureJobItem extends React.Component {
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
      <ItemFutureView
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
)(FutureJobItem);
