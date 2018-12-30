import React from "react";
import PropTypes from "prop-types";

export default class DashStats extends React.Component {
  static propTypes = {
    ytd: PropTypes.number,
    mtd: PropTypes.string.isRequired
  };
  render() {
    const { ytd, mtd } = this.props;
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
                <div className="col-sm-12">Year to Date: {ytd}</div>
              </div>
              <div className="row">
                <div className="col">Month to Date: {mtd}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
