import React from "react";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <Col sm="12" md="3" lg="2">
        <ListGroup flush>
          <ListGroupItem>
            <NavLink to="/myjobs/past" activeClassName="selected">
              Past Jobs
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink to="/myjobs/future" activeClassName="selected">
              Upcoming Jobs
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink to="/myclients" activeClassName="selected">
              My Clients
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink to="/myexpenses" activeClassName="selected">
              My Expenses
            </NavLink>
          </ListGroupItem>
          <ListGroupItem>
            <NavLink to="/mystats" activeClassName="selected">
              My Stats
            </NavLink>
          </ListGroupItem>
        </ListGroup>
      </Col>
    );
  }
}
