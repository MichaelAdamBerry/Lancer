import React from "react";
import PropTypes from "prop-types";
import { Col } from "reactstrap";

export default class Stats extends React.Component {
  static propTypes = {
    ytd: PropTypes.number,
    mtd: PropTypes.number,
    pendingGross: PropTypes.number,
    EstimatedNet: PropTypes.number
  };
  render() {
    const { ytd, mtd, pendingGross, estPendingNet } = this.props;
    return (
      <div className="container-fluid siteText">
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
                <Col sm="12">Year to Date: {ytd}</Col>
                <Col>Month to Date: {mtd}</Col>
              </div>
              <div className="row">
                <Col>Pending Payments: {pendingGross} </Col>
                <Col>Estimated Net Pending Payments: {estPendingNet}</Col>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
