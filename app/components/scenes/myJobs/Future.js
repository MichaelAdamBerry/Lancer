import React from "react";
import PropTypes from "prop-types";
import { firestore } from "../../../firebase";
import { collectIdsAndDocs } from "../../../utilities";
import FutureView from "./FutureView";

export default class Future extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: null
    };
  }

  unsubscribe = null;

  componentDidMount = async () => {
    //temp uid - will get user info from global store when redux implemented
    const uid = "user";
    this.unsubscribe = await firestore
      .collection(`users/${uid}/jobs`)
      .onSnapshot(snapshot => {
        const jobs = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ jobs });
      });
  };

  componentWillUnmount = async () => {
    this.unsubscribe();
  };

  handleRemove = async id => {
    await firestore;
    const uid = "user".doc(`users/${uid}/jobs/${id}`).delete();
  };

  static propTypes = { fullView: PropTypes.bool.isRequired };
  static defaultProps = { fullView: true };
  render() {
    if (!this.state.jobs) {
      return (
        <small className="text-muted">
          You have no upcoming jobs to display
        </small>
      );
    } else {
      return (
        <div className="col">
          <FutureView jobs={this.state.jobs} handleRemove={this.handleRemove} />
        </div>
      );
    }
  }
}
