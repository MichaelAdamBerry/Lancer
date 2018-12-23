import React from "react";
import { firestore, auth } from "../../../firebase";
import { collectIdsAndDocs } from "../../../utilities";
import PastView from "./PastView";

export default class Past extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: null
    };
  }

  unsubscribe = null;

  componentDidMount = async () => {
    this.getJobsData();
  };

  getJobsData = async () => {
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

  handleEdit = job => {
    const properties = { ...job };
    console.log("handleEdit fired", job);
    //redirect to new route EditJob component job as props. New form that has an onSubmit function that updates database
  };

  handleRemove = async id => {
    firestore.doc(`users/${uid}jobs/${id}`).delete();
  };

  render() {
    console.log(auth.currentUser);
    if (!this.state.jobs) {
      return (
        <small className="text-muted">You have no past jobs to display</small>
      );
    } else {
      return (
        <div className="col">
          <PastView
            jobs={this.state.jobs}
            handleRemove={this.handleRemove}
            handleEdit={this.handleEdit}
          />
        </div>
      );
    }
  }
}
