import React from "react";
const CurrentUser = ({ user, signOut }) => {
  return (
    <div className="userCard">
      <div className="d-flex justify-content-center">
        <img className="userAvatar" src={user.photoURL} />
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-link font-italic"
          type="button"
          style={{ color: "#d0021b" }}
          onClick={signOut}>
          SignOut
        </button>
      </div>
    </div>
  );
};

export default CurrentUser;
