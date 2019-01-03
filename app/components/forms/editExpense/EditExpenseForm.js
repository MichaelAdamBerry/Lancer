import React from "react";
import { connect } from "react-redux";
import EditExpenseFormView from "./EditExpenseFormView";
import * as actions from "../../../actions/actions";
import SuccessAlert from "../inputComponents/SuccessAlert";

class EditExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.currentExpense, showSuccessAlert: false };
  }

  componentWillMount = async () => {
    this.props.fetchClients();
  };
  componentWillUnmount = () => {
    this.props.fetchClients();
  };

  renderSuccessAlert = () => {
    if (this.state.showSuccessAlert === true) {
      return <SuccessAlert message="Expense was updated successfully" />;
    } else {
      return <></>;
    }
  };

  handleEditSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const editExpense = this.props.editExpense;
    const expenseObj = {
      ...this.state
    };

    editExpense(this.state.id, { ...expenseObj });
    this.setState({ showSuccessAlert: true });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const state = this.state;
    return (
      <>
        {this.renderSuccessAlert()}
        <EditExpenseFormView
          clients={this.props.clients}
          handleChange={this.handleChange}
          handleEditSubmit={this.handleEditSubmit}
          {...state}
        />
      </>
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
