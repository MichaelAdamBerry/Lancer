import React from "react";
import PropTypes from "prop-types";

export default function FutureView({ renderJobs, renderModal }) {
  return (
    <div className="container-fluid siteText">
      {renderModal()}
      <div className="row">
        <div className="col content shadow">
          <h5 className="tableHeading">Upcomping Jobs</h5>
          <table className="table table-sm">
            <caption>Full View of Upcoming Jobs</caption>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Client</th>
                <th scope="col">Location</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>{renderJobs()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
