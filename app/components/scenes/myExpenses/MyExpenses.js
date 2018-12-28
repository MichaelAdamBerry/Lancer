import React from "react";
import MyExpensesView from "./MyExpensesView";
import _ from "lodash";
import { connect } from "react-redux";
import * as actions from "../../../actions/actions";

class MyExpenses extends React.Component {
  componentWillMount = async () => {
    console.log("fetchExpenses called in componentWillMount");
    this.props.fetchExpenses();
  };
  componentWillUnmount = () => {
    this.props.fetchExpenses();
  };

  //todo handleremove

  render() {
    const { expenses } = this.props;
    console.log(
      "this.props.expenses at MyExpenses render ",
      this.props.expenses
    );
    if (!expenses) {
      return <div>loading</div>;
    } else {
      return <MyExpensesView expenses={expenses} />;
    }
  }
}

const mapStateToProps = ({ expenses }) => {
  return { expenses };
};

export default connect(
  mapStateToProps,
  actions
)(MyExpenses);
