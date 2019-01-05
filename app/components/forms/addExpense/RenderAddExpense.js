import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import ClientOption from "../inputComponents/ClientOption";
import ExpenseFormView from "./views/ExpenseFormView";

export default class AddExpenseView extends React.Component {
  renderClientOptions = () => {
    const { clients } = this.props;
    const clientArr = _.map(clients, (value, key) => {
      return <ClientOption key={key} client={value} />;
    });
    if (this.props.clients) {
      return clientArr;
    }
    return (
      <option className="disabled">
        You must add a client before creating a new expense
      </option>
    );
  };

  render() {
    return (
      <ExpenseFormView
        renderClientOptions={this.renderClientOptions}
        {...this.props}
      />
    );
  }
}
