import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchJobs } from "../../../actions/actions";
import PropTypes from "prop-types";
import { firestore } from "../../../firebase";
import { collectIdsAndDocs } from "../../../utilities";
import FutureView from "./FutureView";

class Future extends React.Component {
  componentWillMount = async () => {
    this.props.fetchJobs();
  };

  componentWillUnmount = async () => {
    this.props.fetchJobs();
  };

  render() {
    if (!this.props.jobs) {
      return <div>loading</div>;
    } else {
      return (
        <div className="col">
          <FutureView jobs={this.props.jobs} />
        </div>
      );
    }
  }
}

const mapStateToProps = ({ jobs }) => {
  return { jobs };
};

export default connect(
  mapStateToProps,
  { fetchJobs }
)(Future);
