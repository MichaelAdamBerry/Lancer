import React from "react";
import { firestore } from "../../firebase";
import { collectIdsAndDocs } from "../../utilities";
import DashboardView from "./components/DashboardView";

class Dashboard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      jobs: [],
      stats: {}
    };
  }
  unmount = null;

  componentDidMount = async () => {
    //get uid from store
    const uid = "user";
    this.setState({ uid });
    this.unmount = await firestore
      .collection(`users/${uid}/jobs`)
      .onSnapshot(snapshot => {
        const jobs = snapshot.docs.map(collectIdsAndDocs);
        this.setState({ jobs });
      });

    //get jobs from database
    //separate past and future jobs and store in state
  };

  getStats = jobs => {
    //to do make this function in utilities
    this.setState({ stats: { ytd: 0, mtd: 0 } });
  };

  componentWillUnmount() {
    this.unmount();
  }

  render() {
    if (this.state.uid != "") {
      return <DashboardView {...this.state} />;
    } else {
      return <div>loading</div>;
    }
  }
}

export default Dashboard;
