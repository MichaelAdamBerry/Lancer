import React from "react";
import PropTypes from "prop-types";
import { dollarFormat } from "../../../utilities";

export default class DashStats extends React.Component {
  static propTypes = {
    ytd: PropTypes.number,
    mtd: PropTypes.number
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
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <p>Income year to date:{dollarFormat(ytd)}</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p>Income month to date: {dollarFormat(mtd)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
