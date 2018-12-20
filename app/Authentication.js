import React from "react";
import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";
const Authentication = ({ user, loading }) => {
  if (loading) {
    return null;
  }
  return <>{user ? <CurrentUser user={user} /> : <SignInAndSignUp />}</>;
};
export default Authentication;
