import React from "react";
import { auth } from "../firebase";

const CurrentUser = ({ user, signOut }) => {
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        position: "absolute",
        top: "5px",
        right: "5px"
      }}>
      <img
        className="userAvatar"
        style={{ height: "50px", width: "auto", margin: "auto" }}
        src={user.photoURL}
      />
      <button
        className="btn btn-sm btn-secondary"
        type="button"
        onClick={signOut}>
        SignOut
      </button>
    </div>
  );
};

export default CurrentUser;
