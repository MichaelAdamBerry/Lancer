import React from "react";
import { DropdownItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const DropdownContent = () => {
  return (
    <>
      <DropdownItem>
        <NavLink to="/myjobs/past" activeClassName="selected">
          Past Jobs
        </NavLink>
      </DropdownItem>
      <DropdownItem>
        <NavLink to="/myjobs/future" activeClassName="selected">
          Upcoming Jobs
        </NavLink>
      </DropdownItem>
      <DropdownItem>
        <NavLink to="/myclients" activeClassName="selected">
          My Clients
        </NavLink>
      </DropdownItem>
      <DropdownItem>
        <NavLink to="/myexpenses" activeClassName="selected">
          My Expenses
        </NavLink>
      </DropdownItem>
      <DropdownItem>
        <NavLink to="/mystats" activeClassName="selected">
          My Stats
        </NavLink>
      </DropdownItem>
    </>
  );
};

export default DropdownContent;
