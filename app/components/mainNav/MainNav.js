import React from "react";
import MainNavView from "./MainNavView";

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isLoading: true,
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount = () => {
    const uid = "user";
    this.setState({ uid }, () => {
      this.setState({ isLoading: false });
    });
  };

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  render() {
    const { uid, dropdownOpen, isLoading } = this.state;

    if (isLoading === false) {
      return (
        <MainNavView
          uid={uid}
          dropdownOpen={dropdownOpen}
          toggle={this.toggle}
        />
      );
    } else {
      return <div>loading</div>;
    }
  }
}
