import React from "react";
import { NavLink } from "react-router-dom";

const DropdownContent = () => {
  return (
    <div className="navDropDownContainer" style={{ height: "100%" }}>
      <div className="dropdownNav">
        <NavLink to="/myjobs/past" activeClassName="selected">
          Past Jobs
        </NavLink>
      </div>
      <div className="dropdownNav">
        <NavLink to="/myjobs/future" activeClassName="selected">
          Upcoming Jobs
        </NavLink>
      </div>
      <div className="dropdownNav">
        <NavLink to="/myclients" activeClassName="selected">
          My Clients
        </NavLink>
      </div>
      <div className="dropdownNav">
        <NavLink to="/myexpenses" activeClassName="selected">
          My Expenses
        </NavLink>
      </div>
      <div className="dropdownNav">
        <NavLink to="/mystats" activeClassName="selected">
          My Stats
        </NavLink>
      </div>
    </div>
  );
};

export default DropdownContent;
