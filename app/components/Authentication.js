import React from "react";
import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";
import PropTypes from "prop-types";

const Authentication = ({ user, loading, signOut, signInWithPopup }) => {
  if (loading) {
    return null;
  }
  return (
    <>
      {user ? (
        <CurrentUser user={user} signOut={signOut} />
      ) : (
        <SignInAndSignUp signInWithPopup={signInWithPopup} />
      )}
    </>
  );
};

Authentication.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool
};
export default Authentication;
