import React from "react";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    const userId = this.props.userId;
    return (
      <Col md="3" lg="2" className="d-none d-md-block">
        <ListGroup flush>
          <ListGroupItem>
            <Link
              to={{ pathname: "/myjobs/past", state: { userId: userId } }}
              className="dropdown-item">
              Past Jobs
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link
              to={{ pathname: "/myjobs/future", state: { userId: userId } }}
              className="dropdown-item">
              Upcoming Jobs
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link
              to={{ pathname: "/myclients", state: { userId: userId } }}
              className="dropdown-item">
              My Clients
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link
              to={{ pathname: "/myexpenses", state: { userId: userId } }}
              className="dropdown-item">
              My Expenses
            </Link>
          </ListGroupItem>
          <ListGroupItem>
            <Link
              to={{ pathname: "/mystats", state: { userId: userId } }}
              className="dropdown-item">
              My Stats
            </Link>
          </ListGroupItem>
        </ListGroup>
      </Col>
    );
  }
}
