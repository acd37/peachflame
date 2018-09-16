import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { SharedSnackbarProvider } from "./SharedSnackbar.context";
import { ClientsProvider } from "./Clients.context";
import Appbar from "./components/Appbar";
import BottomNav from "./components/BottomNav";
import Landing from "./pages/landing";
import About from "./pages/about";
import Editing from "./pages/editing";
import Development from "./pages/development";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Quote from "./pages/quote";
import NotFound from "./pages/404";

class App extends Component {
  state = {
    authedUser: {}
  };

  componentDidMount() {
    let localToken = localStorage.getItem("peachflame");

    if (localToken) {
      axios({
        url: "/api/users/current",
        method: "get",
        headers: {
          Authorization: localToken
        }
      })
        .then(res => {
          console.log(res.data);
          const user = res.data;
          const authedUser = { ...user, isLoggedIn: true };
          this.setState({
            authedUser
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  updateAuth = res => {
    const user = res.data;
    const authedUser = { ...user, isLoggedIn: true };
    this.setState({
      authedUser
    });
  };

  logout = dispatch => {
    this.setState({
      authedUser: {}
    });
    localStorage.removeItem("peachflame");
    this.props.history.push("/login");
    if (!localStorage.getItem("peachflame")) {
      dispatch({ type: "DISPLAY_ALERT", payload: "Logged out successfully." });
    }
  };

  render() {
    return (
      <div className="App">
        <SharedSnackbarProvider>
          <ClientsProvider>
            <Appbar logout={this.logout} authedUser={this.state.authedUser} />

            <Switch>
              {/* <Route component={NotFound} /> */}
              <Route exact path="/" component={Landing} />
              <Route path="/about" component={About} />
              <Route path="/editing" component={Editing} />
              <Route path="/development" component={Development} />
              <Route path="/quote" component={Quote} />

              {this.state.authedUser.isLoggedIn && (
                <Route
                  exact
                  path="/login"
                  render={() => (
                    <Redirect
                      to="/admin"
                      updateAuth={this.updateAuth}
                      authedUser={this.state.authedUser}
                    />
                  )}
                />
              )}

              {!this.state.authedUser.isLoggedIn && (
                <Route
                  exact
                  path="/login"
                  render={() => <Login updateAuth={this.updateAuth} />}
                />
              )}

              {this.state.authedUser.isLoggedIn && (
                <Route
                  exact
                  path="/admin"
                  render={() => (
                    <Admin
                      updateAuth={this.updateAuth}
                      authedUser={this.state.authedUser}
                    />
                  )}
                />
              )}

              {!this.state.authedUser.isLoggedIn && (
                <Route
                  exact
                  path="/admin"
                  render={() => (
                    <Redirect to="/login" updateAuth={this.updateAuth} />
                  )}
                />
              )}
            </Switch>
            <BottomNav />
          </ClientsProvider>
        </SharedSnackbarProvider>
      </div>
    );
  }
}

export default withRouter(App);
