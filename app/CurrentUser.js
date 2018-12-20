import React from "react";
import { auth } from "./firebase";
import Avatar from "./Avatar";

const CurrentUser = ({ user }) => {
  return (
    <div
      style={{
        width: "100px",
        height: "200px",
        position: "absolute",
        top: "5px",
        right: "5px"
      }}>
      <Avatar photoURL={user.photoURL} />
      <button
        className="btn btn-sm btn-outline-success"
        type="button"
        onClick={() => auth.signOut()}>
        SignOut
      </button>
    </div>
  );
};

export default CurrentUser;
