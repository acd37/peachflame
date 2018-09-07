import React, { Component, Fragment } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
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
    authedUser: {}
  };

  updateAuth = res => {
    const user = res.data;
    const authedUser = { ...user, isLoggedIn: true };
    this.setState({
      authedUser
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Fragment>
              <Appbar authedUser={this.state.authedUser} />
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
