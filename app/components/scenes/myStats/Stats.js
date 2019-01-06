import React from "react";
import PropTypes from "prop-types";
import StatsView from "./StatsView";
import { connect } from "react-redux";
import DashStats from "./DashStats";
import { fetchJobs } from "../../../actions/actions";
import _ from "lodash";
import {
  calculateNetMonthToDate,
  calculateNetYearToDate,
  calculateSumOfPendingGross,
  calculateSumOfPendingEstNet
} from "./utils/statFunctions";

class Stats extends React.Component {
  renderStatsView = () => {
    var jobs = this.props.jobs;
    console.log(jobs);
    var netYear = calculateNetYearToDate(jobs);
    var netMonth = calculateNetMonthToDate(jobs);
    var pendingGross = calculateSumOfPendingGross(jobs);
    var estPendingNet = calculateSumOfPendingEstNet(jobs);
    if (this.props.dash === true) {
      return (
        <DashStats
          ytd={netYear}
          mtd={netMonth}
          pendingGross={pendingGross}
          estPendingNet={estPendingNet}
        />
      );
    } else {
      return (
        <StatsView
          ytd={netYear}
          mtd={netMonth}
          pendingGross={pendingGross}
          estPendingNet={estPendingNet}
        />
      );
    }
  };

  componentWillMount = async () => {
    this.props.fetchJobs();
  };
  componentWillUnmount = () => {
    this.props.fetchJobs();
  };

  render() {
    return <>{this.renderStatsView()}</>;
  }
}

const mapStateToProps = ({ jobs }) => {
  return { jobs };
};

export default connect(
  mapStateToProps,
  { fetchJobs }
)(Stats);
