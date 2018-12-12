import React from "react";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <Col md="3" lg="2" className="d-none d-md-block">
        <ListGroup flush>
          <ListGroupItem>
            <NavLink
              to="/myjobs/past"
              className="dropdown-item"
              activeClassName="selected">
              Past Jobs
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink
              to="/myjobs/future"
              className="dropdown-item"
              activeClassName="selected">
              Upcoming Jobs
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink
              to="/myclients"
              className="dropdown-item"
              activeClassName="selected">
              My Clients
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink
              to="/myexpenses"
              className="dropdown-item"
              activeClassName="selected">
              My Expenses
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink
              to="/mystats"
              className="dropdown-item"
              activeClassName="selected">
              My Stats
            </NavLink>
          </ListGroupItem>
        </ListGroup>
      </Col>
    );
  }
}
