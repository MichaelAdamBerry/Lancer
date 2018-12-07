import React from "react";
import Dashboard from "./scenes/dashboard/Dashboard";
import TitleBar from "./components/TitleBar";
import WelcomeSplash from "./components/WelcomeSplash";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import Future from "./scenes/myJobs/Future";
import Past from "./scenes/myJobs/Past";
import AddJob from "./scenes/myJobs/AddJob";
import AddClient from "./scenes/myClients/AddClient";
import Clients from "./scenes/myClients/Clients";
import MyExpenses from "./scenes/myExpenses/MyExpenses";
import AddExpense from "./scenes/myExpenses/AddExpense";
import Stats from "./scenes/myStats/Stats";
import MainNav from "./components/MainNav";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom";
import Register from "./components/Register";
import fakeAuth from "./fakeData/fakeAuth";
import Login from "./components/Login";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
//if authenticated render Nav
const Title = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <Container fluid>
      <TitleBar
        signedIn={true}
        handleClick={() => {
          fakeAuth.signout();
        }}
      />
      <MainNav />
    </Container>
  ) : (
    <Container fluid>
      <TitleBar signedIn={false} />
    </Container>
  )
);

export default function AuthExample() {
  return (
    <Router>
      <div>
        <Title />

        <Route path="/login" component={Login} />
        <Switch>
          <Route path="/register" component={Register} />
          <Route exact path="/" component={WelcomeSplash} />
          <PrivateRoute path="/myjobs/past" component={Past} />
          <PrivateRoute path="/myjobs/future" component={Future} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/addjob" component={AddJob} />
          <PrivateRoute path="/addclient" component={AddClient} />
          <PrivateRoute path="/myclients" component={Clients} />
          <PrivateRoute path="/mystats" component={Stats} />
          <PrivateRoute path="/myexpenses" component={MyExpenses} />
          <PrivateRoute path="/addexpense" component={AddExpense} />
        </Switch>
      </div>
    </Router>
  );
}
