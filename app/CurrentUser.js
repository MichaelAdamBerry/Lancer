import React from "react";
import { auth } from "./firebase";
import Avatar from "./Avatar";

const CurrentUser = ({ user }) => {
  return (
    <div
      className="container"
      style={{
        height: "100px",
        width: "100px",
        position: "absolute",
        top: "5px",
        right: "5px"
      }}>
      <div className="row">
        <div className="col">
          <img
            className="userAvatar"
            style={{ height: "50px", width: "auto", margin: "auto" }}
            src={user.photoURL}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            className="btn btn-sm btn-secondary"
            type="button"
            onClick={() => auth.signOut()}>
            SignOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentUser;
