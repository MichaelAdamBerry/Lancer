import React from "react";
import Logo from "./logo/Logo";

export default function TitleBar() {
  return (
    <>
      <Logo />
      <div className="row titleBar shadow">
        <div className="col siteTitle align-items-center text-center">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100%", fontFamily: "fantasy" }}>
            <h1>Lancer</h1>
          </div>
        </div>
      </div>
    </>
  );
}
