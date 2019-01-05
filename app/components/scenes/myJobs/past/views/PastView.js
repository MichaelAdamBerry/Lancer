import React from "react";

export default function PastView({ renderModal, renderJobs }) {
  return (
    <div className="container-fluid siteText">
      {renderModal()}
      <div className="row">
        <div className="col content shadow">
          <h5 className="tableHeading">Past Jobs</h5>
          <table className="table table-sm">
            <caption>Full List of Past Jobs</caption>
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Client</th>
                <th scope="col">$</th>
                <th scope="col">Status</th>
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
