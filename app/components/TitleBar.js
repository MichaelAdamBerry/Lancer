import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";

export default function TitleBar() {
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
