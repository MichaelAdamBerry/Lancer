import React from "react";
import { Col } from "reactstrap";
import DashFuture from "./DashFuture";
import DashPast from "./DashPast";
import DashStats from "./DashStats";

const DashboardView = ({ jobs, stats }) => {
  return (
    <div className="container-fluid siteText">
      <div className="row">
        <Col sm="12" md="9">
          <div className="col">
            <div className="col dashTable">
              <DashFuture jobs={jobs} />
            </div>
            <div className="col dashTable">
              <DashPast jobs={jobs} />
            </div>
            <div className="col dashTable">
              <DashStats stats={stats} />
            </div>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default DashboardView;
