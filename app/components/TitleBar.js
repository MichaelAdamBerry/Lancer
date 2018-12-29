import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";

export default function TitleBar() {
  return (
    <div className="row titleBar shadow">
      <div className="col titleIcon">
        <div className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon icon={faDragon} size="lg" />
        </div>
      </div>
      <div className="col siteTitle align-items-center text-center">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100%", fontFamily: "fantasy" }}>
          <h1>Lancer</h1>
        </div>
      </div>
    </div>
  );
}
