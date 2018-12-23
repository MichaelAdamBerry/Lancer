import React from "react";
const CurrentUser = ({ user, signOut }) => {
  return (
    <div className="userCard">
      <div className="d-flex justify-content-center">
        <img
          className="userAvatar"
          style={{ height: "50px", width: "auto", margin: "auto" }}
          src={user.photoURL}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-link font-italic"
          type="button"
          onClick={signOut}>
          SignOut
        </button>
      </div>
    </div>
  );
};

export default CurrentUser;
