import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchJobs } from "../../../actions/actions";
import DashboardView from "./components/DashboardView";

class Dashboard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      stats: { ytd: 0, mtd: 0 }
    };
  }

  componentWillMount = () => {
    this.props.fetchJobs();
  };

  componentWillUnmount() {
    this.props.fetchJobs();
  }

  render() {
    if (!this.props.jobs) {
      return <div>loading</div>;
    } else {
      return <DashboardView stats={this.state.stats} jobs={this.props.jobs} />;
    }
  }
}

const mapStateToProps = ({ jobs }) => {
  return { jobs };
};

export default connect(
  mapStateToProps,
  { fetchJobs }
)(Dashboard);
