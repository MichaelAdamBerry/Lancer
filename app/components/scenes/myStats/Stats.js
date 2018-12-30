import React from "react";
import PropTypes from "prop-types";
import StatsView from "./StatsView";
import { connect } from "react-redux";
import DashStats from "./DashStats";
import { fetchJobs } from "../../../actions/actions";
import { filterYTD, filterMTD } from "../../../utilities";
import _ from "lodash";

class Stats extends React.Component {
  renderStatsView = () => {
    const jobs = this.props.jobs;
    const paidJobs = _.filter(jobs, value => {
      return value.paid == true;
    });
    const jobsThisYear = filterYTD(paidJobs);
    const jobsThisMonth = filterMTD(paidJobs);
    const ytd = _.reduce(
      jobsThisYear,
      (accumulator, current) => {
        return (accumulator = accumulator + current.net);
      },
      0
    );
    const mtd = _.reduce(
      jobsThisMonth,
      (accumulator, current) => {
        return (accumulator = accumulator + current.net);
      },
      0
    );

    if (this.props.dash === true) {
      return <DashStats ytd={ytd} mtd={mtd} />;
    } else {
      return <StatsView ytd={ytd} mtd={mtd} />;
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
