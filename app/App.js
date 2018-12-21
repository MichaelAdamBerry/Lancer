import React from "react";
import Dashboard from "./scenes/dashboard/Dashboard";
import TitleBar from "./components/TitleBar";
import Future from "./scenes/myJobs/Future";
import Past from "./scenes/myJobs/Past";
import AddJob from "./scenes/myJobs/AddJob";
import AddClient from "./scenes/myClients/AddClient";
import Clients from "./scenes/myClients/Clients";
import MyExpenses from "./scenes/myExpenses/MyExpenses";
import AddExpense from "./scenes/myExpenses/AddExpense";
import Stats from "./scenes/myStats/Stats";
import MainNav from "./components/MainNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth, firestore } from "./firebase";
import Authentication from "./Authentication";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  unsubscribeToAuth = null;

  componentDidMount = async () => {
    this.unsubscribeToAuth = auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  };

  componentWillUnmount() {
    this.unsubscribeToAuth();
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <TitleBar />
          <Authentication user={this.state.user} />
          <MainNav user={this.state.user} />

          <Switch>
            <Route path="/myjobs/past" component={Past} />
            <Route path="/myjobs/future" component={Future} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/addjob" component={AddJob} />
            <Route path="/addclient" component={AddClient} />
            <Route path="/myclients" component={Clients} />
            <Route path="/mystats" component={Stats} />
            <Route path="/myexpenses" component={MyExpenses} />
            <Route path="/addexpense" component={AddExpense} />
          </Switch>
        </div>
      </Router>
    );
  }
}
