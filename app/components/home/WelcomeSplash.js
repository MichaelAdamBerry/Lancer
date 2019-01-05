import React from "react";
import { Redirect } from "react-router-dom";
import WelcomeSplashView from "./WelcomeSplashView";

export default class WelcomeSplash extends React.Component {
  state = {
    redirect: false
  };

  redirectToDash = () => {
    if (this.state.redirect === true) {
      return <Redirect to="dashboard" />;
    } else {
      return <></>;
    }
  };

  toggleAndRedirect = () => {
    this.setState({ redirect: true });
    this.props.toggleShowWelcomeSplash();
  };

  render() {
    const { user, showWelcomeSplash, toggleShowWelcomeSplash } = this.props;
    const { displayName } = user;
    return (
      <>
        <WelcomeSplashView
          showWelcomeSplash={showWelcomeSplash}
          toggleShowWelcomeSplash={toggleShowWelcomeSplash}
          toggleAndRedirect={this.toggleAndRedirect}
          displayName={displayName}
        />
        {this.redirectToDash()}
      </>
    );
  }
}
