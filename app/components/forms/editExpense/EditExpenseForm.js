import React from "react";
import { connect } from "react-redux";
import EditExpenseFormView from "./EditExpenseFormView";
import * as actions from "../../../actions/actions";

class EditExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.currentExpense };
  }

  componentWillMount = async () => {
    this.props.fetchClients();
  };
  componentWillUnmount = () => {
    this.props.fetchClients();
  };

  handleEditSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const editExpense = this.props.editExpense;
    const expenseObj = {
      ...this.state
    };

    editExpense(this.state.id, { ...expenseObj });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const state = this.state;
    return (
      <EditExpenseFormView
        clients={this.props.clients}
        handleChange={this.handleChange}
        handleEditSubmit={this.handleEditSubmit}
        {...state}
      />
    );
  }
}

const mapStateToProps = ({ clients }) => {
  return {
    clients
  };
};

export default connect(
  mapStateToProps,
  actions
)(EditExpenseForm);
