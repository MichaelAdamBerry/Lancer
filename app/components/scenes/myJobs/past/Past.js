import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchJobs } from "../../../../actions/actions";
import RenderPast from "./RenderPast";
import PropTypes from "prop-types";

class Past extends React.Component {
  static propTypes = {
    fetchJobs: PropTypes.func.isRequired,
    jobs: PropTypes.arrayOf(
      PropTypes.shape({
        client: PropTypes.string,
        date: PropTypes.string,
        endTime: PropTypes.string,
        estNet: PropTypes.number,
        gross: PropTypes.number,
        location: PropTypes.string,
        net: PropTypes.number,
        notes: PropTypes.string,
        overTimeHours: PropTypes.number,
        paid: PropTypes.bool,
        rate: PropTypes.string,
        regularHours: PropTypes.number,
        startTime: PropTypes.string,
        clientObj: PropTypes.shape({
          clientName: PropTypes.string,
          contactName: PropTypes.string,
          dayRate: PropTypes.string,
          hrRate: PropTypes.string,
          id: PropTypes.string,
          otRate: PropTypes.string,
          phone: PropTypes.string
        })
      })
    )
  };
  componentWillMount = async () => {
    this.props.fetchJobs();
  };

  componentWillUnmount = async () => {
    this.props.fetchJobs();
  };

  render() {
    console.log(this.props.jobs);
    if (!this.props.jobs) {
      return <div>loading</div>;
    } else {
      return (
        <div className="col fullTable">
          <RenderPast jobs={this.props.jobs} />
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
