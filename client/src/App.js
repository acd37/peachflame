import React, { Component, Fragment } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Spinner from "./components/Spinner";
import Appbar from "./components/Appbar";
import BottomNav from "./components/BottomNav";
import Landing from "./pages/landing";
import About from "./pages/about";
import Editing from "./pages/editing";
import Development from "./pages/development";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Quote from "./pages/quote";
import NotFound from "./pages/404";
import Axios from "axios";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(0,114,255)",
      contrastText: "rgb(244, 245, 247)"
    },
    secondary: {
      main: "rgb(244, 245, 247)",
      contrastText: "rgb(37,56,88)"
    }
  }
});

class App extends Component {
  state = {
    authedUser: {},
    loading: true
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1200);

    let localToken = localStorage.getItem("peachflame");
    console.log(localToken);

    if (localToken) {
      axios({
        url: "/api/users/current",
        method: "get",
        headers: {
          Authorization: localToken
        }
      })
        .then(res => {
          this.updateAuth(res);
        })
        .catch(err => console.log(err));
    }
  }

  updateAuth = res => {
    const user = res.data;
    const authedUser = { ...user, isLoggedIn: true };
    this.setState({
      authedUser
    });
  };

  logout = () => {
    this.setState({
      authedUser: {}
    });
    localStorage.removeItem("peachflame");
  };

  render() {
    const { loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Fragment>
              <Appbar logout={this.logout} authedUser={this.state.authedUser} />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/about" component={About} />
                <Route path="/editing" component={Editing} />
                <Route path="/development" component={Development} />
                <Route
                  path="/dashboard"
                  render={() =>
                    !this.state.authedUser.isLoggedIn ? (
                      <Redirect to="/login" updateAuth={this.updateAuth} />
                    ) : (
                      <Dashboard authedUser={this.state.authedUser} />
                    )
                  }
                />
                <Route
                  path="/login"
                  render={() =>
                    this.state.authedUser.isLoggedIn ? (
                      <Redirect to="/dashboard" />
                    ) : (
                      <Login updateAuth={this.updateAuth} />
                    )
                  }
                />
                <Route path="/quote" component={Quote} />
                <Route component={NotFound} />
              </Switch>
              <BottomNav />
            </Fragment>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
