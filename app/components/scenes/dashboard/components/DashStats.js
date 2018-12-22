import React from "react";
import PropTypes from "prop-types";

const DashStats = ({ stats }) => {
  return (
    <div className="container-fluid">
      <div className="row underline">
        <div className="col">
          <h5>My Stats</h5>
        </div>
      </div>
      <div className="row d-flex align-content-around">
        <div className="col align-content-center">
          <h5>Earnings</h5>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">Year to Date: {stats.ytd}</div>
            </div>
            <div className="row">
              <div className="col">Month to Date: {stats.mtd}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashStats;

DashStats.propTypes = {
  stats: PropTypes.object.isRequired
};
