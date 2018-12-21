import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";

export default class TitleBar extends React.Component {
  render() {
    return (
      <div className="row titleBar">
        <div className="col titleIcon">
          <FontAwesomeIcon icon={faDragon} size="lg" />
        </div>
        <div className="col-10 siteTitle align-items-center text-center">
          <h1>Lancer</h1>
        </div>
        <div className="col titleIcon" />
      </div>
    );
  }
}
