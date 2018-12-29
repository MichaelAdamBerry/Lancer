import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Table } from "reactstrap";
import ClientItem from "./ClientItem";

export default class MyClientsView extends React.Component {
  renderClients = () => {
    const { clients } = this.props;
    const clientArr = _.map(clients, (value, key) => {
      return <ClientItem key={key} client={value} />;
    });
    if (!_.isEmpty(clientArr)) {
      return clientArr;
    }
    return (
      <tr>
        <td>You haven't added any clients yet</td>
      </tr>
    );
  };

  render() {
    return (
      <div className="container-fluid siteText">
        <div className="row">
          <div className="col content shadow">
            <h5 className="tableHeading">Clients</h5>
            <Table hover striped>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Main Contact</th>
                  <th>phone</th>
                </tr>
                {this.renderClients()}
              </thead>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
