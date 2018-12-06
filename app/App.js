import React from "react";
import Dashboard from "./scenes/dashboard/Dashboard";
import TitleBar from "./components/TitleBar";
import { Container, Row, Col } from "reactstrap";
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

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };
  //should render a sign in form username and password
  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <Container fluid>
        <Row>
          <Col xs="12">Log In Form</Col>
          <Col
            xs={{ size: "6", offset: "5" }}
            className="justify-content-center">
            <button onClick={this.login}>Log in</button>
          </Col>
        </Row>
      </Container>
    );
  }
}

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
const Splash = withRouter(({ history }) =>
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
      <TitleBar signedIn={false} handleClick={() => <Redirect to="/login" />} />
      <Row>
        <Col className="signedOut justify-content-center">
          <h5 className="text-center">
            Welcome to Lancer! Making life easy for freelancers!
          </h5>
          <div className="text-center">
            <h5>
              <Link to="/register">sign up</Link>
            </h5>
            <h5>or</h5>
            <h5>
              <Link to="/login">Log in</Link>
            </h5>
          </div>
        </Col>
      </Row>
    </Container>
  )
);

export default function AuthExample() {
  return (
    <Router>
      <div>
        <Splash />
        <Row>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Switch>
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
        </Row>
      </div>
    </Router>
  );
}
