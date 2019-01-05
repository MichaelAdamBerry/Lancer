import React from "react";
import Dashboard from "./components/scenes/dashboard/Dashboard";
import TitleBar from "./components/TitleBar";
import Future from "./components/scenes/myJobs/Future";
import Past from "./components/scenes/myJobs/past/Past";
import AddJob from "./components/forms/addJob/AddJob";
import AddClient from "./components/forms/addClient/AddClient";
import Clients from "./components/scenes/myClients/Clients";
import MyExpenses from "./components/scenes/myExpenses/MyExpenses";
import AddExpense from "./components/forms/addExpense/AddExpense";
import Stats from "./components/scenes/myStats/Stats";
import MainNav from "./components/MainNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth, firestore, signInWithPopup } from "./firebase";
import Authentication from "./components/Authentication";

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
    const signOut = () => auth.signOut();

    return (
      <Router>
        <>
          <TitleBar />
          <Authentication
            user={this.state.user}
            signOut={signOut}
            signInWithPopup={signInWithPopup}
          />
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
        </>
      </Router>
    );
  }
}
