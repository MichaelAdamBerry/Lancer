import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchJobs } from "../../../actions/actions";
import { firestore, auth } from "../../../firebase";
import { collectIdsAndDocs } from "../../../utilities";
import PastView from "./PastView";

class Past extends React.Component {
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
          <PastView jobs={this.props.jobs} />
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
)(Past);
