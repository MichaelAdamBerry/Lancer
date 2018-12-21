import React from "react";
import { Container, Row, Col } from "reactstrap";
import Nav from "./components/Nav";
import Future from "../myJobs/Future";
import Past from "../myJobs/Past";
import { auth, firestore } from "../../firebase";
import { Link } from "react-router-dom";
import Stats from "../myStats/Stats";
import DashFuture from "./components/DashFuture";
import DashPast from "./components/DashPast";
import { collectIdsAndDocs } from "../../utilities";

class Dashboard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      jobs: null
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

  componentWillUnmount() {
    this.unmount();
  }

  render() {
    if (this.state.uid != "") {
      return <DashboardView jobs={this.state.jobs} />;
    } else {
      return <div>loading</div>;
    }
  }
}

const DashboardView = ({ uid, jobs }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav user={uid} />
        <Col sm="12" md="9">
          <div className="col">
            <div className="col dashTable">
              <DashFuture jobs={jobs} />
            </div>
            <div className="col dashTable">
              <DashPast jobs={jobs} />
            </div>
            <div className="col dashTable">
              <Stats showNav={false} />
            </div>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Dashboard;
