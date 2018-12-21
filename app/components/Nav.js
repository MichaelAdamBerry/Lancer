import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    const userId = this.props.userId;
    return (
      <div className="col d-none d-md-flex">
        <ul className="list-group-flush sideNav">
          <li className="list-group-item flex-column align-items-start">
            <Link
              to={{ pathname: "/myjobs/past", state: { userId: userId } }}
              className="dropdown-item">
              Past Jobs
            </Link>
          </li>
          <li className="list-group-item flex-column align-items-start">
            <Link
              to={{ pathname: "/myjobs/future", state: { userId: userId } }}
              className="dropdown-item">
              Upcoming Jobs
            </Link>
          </li>
          <li className="list-group-item flex-column align-items-start">
            <Link
              to={{ pathname: "/myclients", state: { userId: userId } }}
              className="dropdown-item">
              My Clients
            </Link>
          </li>
          <li className="list-group-item flex-column align-items-start">
            <Link
              to={{ pathname: "/myexpenses", state: { userId: userId } }}
              className="dropdown-item">
              My Expenses
            </Link>
          </li>
          <li className="list-group-item">
            <Link
              to={{ pathname: "/mystats", state: { userId: userId } }}
              className="dropdown-item">
              My Stats
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
