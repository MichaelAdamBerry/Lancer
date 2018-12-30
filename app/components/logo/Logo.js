import React from "react";
import { connect } from "react-redux";
import { fetchLogo } from "../../actions/actions";
import LogoView from "./LogoView";

class Logo extends React.Component {
  componentWillMount = async () => {
    this.props.fetchLogo();
  };
  componentWillUnmount = () => {
    this.props.fetchLogo();
  };

  render() {
    return <LogoView logo={this.props.logo} />;
  }
}

const mapStateToProps = ({ logo }) => {
  return { logo };
};

export default connect(
  mapStateToProps,
  { fetchLogo }
)(Logo);
