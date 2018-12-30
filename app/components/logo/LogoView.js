import React from "react";

//TODO: Credit Logo author in footer

export default class LogoView extends React.Component {
  renderLogo = () => {
    const logo = this.props.logo;
    if (logo) {
      return <img className="logoSvg" style={{ height: "50px" }} src={logo} />;
    } else {
      return {};
    }
  };

  render() {
    return (
      <div className=" siteLogo d-flex justify-content-center">
        {this.renderLogo()}
      </div>
    );
  }
}
