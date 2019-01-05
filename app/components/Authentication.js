import React from "react";
import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";
import PropTypes from "prop-types";
import Home from "./home/Home";

const Authentication = ({
  user,
  loading,
  signOut,
  signInWithPopup,
  showWelcomeSplash,
  toggleShowWelcomeSplash
}) => {
  if (loading) {
    return null;
  }
  return (
    <>
      {user ? (
        <Home
          user={user}
          signOut={signOut}
          showWelcomeSplash={showWelcomeSplash}
          toggleShowWelcomeSplash={toggleShowWelcomeSplash}
        />
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
