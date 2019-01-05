import React from "react";
import WelcomeSplash from "./WelcomeSplash";
import CurrentUser from "../CurrentUser";
import MainNav from "../mainNav/MainNav";
import { Redirect } from "react-router-dom";
import Dashboard from "../scenes/dashboard/Dashboard";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      user,
      signOut,
      showWelcomeSplash,
      toggleShowWelcomeSplash
    } = this.props;
    return (
      <>
        <CurrentUser signOut={signOut} user={user} />
        <MainNav />
        <WelcomeSplash
          showWelcomeSplash={showWelcomeSplash}
          toggleShowWelcomeSplash={toggleShowWelcomeSplash}
          user={user}
        />
      </>
    );
  }
}
