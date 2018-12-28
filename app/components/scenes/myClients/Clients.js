import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchClients } from "../../../actions/actions";
import MyClientsView from "./MyClientsView";

class Clients extends React.Component {
  componentWillMount = async () => {
    this.props.fetchClients();
  };

  componentWillUnmount() {
    this.props.fetchClients();
  }

  render() {
    if (!this.props.clients) {
      return <div>loading</div>;
    } else {
      return <MyClientsView clients={this.props.clients} />;
    }
  }
}
const mapStateToProps = ({ clients }) => {
  return { clients };
};

export default connect(
  mapStateToProps,
  { fetchClients }
)(Clients);
