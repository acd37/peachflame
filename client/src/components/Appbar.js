import React, { Component, Fragment } from "react";
import {
  Toolbar,
  Typography,
  Button,
  Grid,
  AppBar,
  IconButton
} from "@material-ui/core";
import logo from "../images/peachflame.png";
import { Link } from "react-router-dom";
import { SharedSnackbarConsumer } from "../SharedSnackbar.context";
import MenuIcon from "@material-ui/icons/Menu";
import AppbarTray from "./AppbarTray";

const styles = {
  flex: {
    flexGrow: 1
  },
  logo: {
    maxHeight: 40,
    marginRight: 10
  },
  logoText: {
    margin: 30,
    marginLeft: 0,
    fontWeight: "800",
    fontSize: 24,
    color: "rgb(37,56,88)"
  },
  appBar: {
    backgroundColor: "rgb(244, 245, 247)",
    boxShadow: "none"
  },
  appBarButton: {
    color: "rgb(37,56,88)",
    fontSize: "1em",
    textTransform: "capitalize",
    textDecoration: "none"
  },
  loginButton: {
    position: "absolute",
    right: 0
  },
  logoutButton: {
    position: "absolute",
    right: 0
  },
  dashboardButton: {
    position: "absolute",
    right: 100
  }
};

const LoginLink = props => <Link to="/login" {...props} />;
const Dash = props => <Link to="/login" {...props} />;

class Appbar extends Component {
  render() {
    return (
      <SharedSnackbarConsumer>
        {value => {
          const { dispatch } = value.state;

          return (
            <AppBar style={styles.appBar} position="absolute">
              <Grid container justify="center">
                <Grid item xs={10}>
                  <Toolbar>
                    <Link to="/">
                      <img style={styles.logo} src={logo} alt="logo" />
                    </Link>
                    <Typography style={styles.logoText} variant="title">
                      PeachFlame
                    </Typography>
                    <div id="appbar">
                      <Button color="inherit">
                        <Link style={styles.appBarButton} to="/">
                          Home
                        </Link>
                      </Button>

                      <Button color="inherit">
                        <Link style={styles.appBarButton} to="/editing">
                          Editing
                        </Link>
                      </Button>

                      <Button color="inherit">
                        <Link style={styles.appBarButton} to="/development">
                          Web Design
                        </Link>
                      </Button>

                      <Button color="inherit">
                        <Link style={styles.appBarButton} to="/quote">
                          Start a Quote
                        </Link>
                      </Button>

                      <Button color="inherit">
                        <Link style={styles.appBarButton} to="/about">
                          Meet the Team
                        </Link>
                      </Button>

                      {!this.props.authedUser.isLoggedIn ? (
                        <Button
                          style={styles.loginButton}
                          variant="contained"
                          color="primary"
                          component={LoginLink}
                        >
                          Login
                        </Button>
                      ) : (
                        <Fragment>
                          <Button
                            style={styles.dashboardButton}
                            variant="contained"
                            color="primary"
                            component={Dash}
                          >
                            Back to Dashboard
                          </Button>
                          <Button
                            style={styles.logoutButton}
                            variant="contained"
                            color="primary"
                            onClick={this.props.logout.bind(this, dispatch)}
                          >
                            Logout
                          </Button>
                        </Fragment>
                      )}
                    </div>
                    <AppbarTray
                      logout={this.props.logout}
                      authedUser={this.props.authedUser}
                    />
                  </Toolbar>
                </Grid>
              </Grid>
            </AppBar>
          );
        }}
      </SharedSnackbarConsumer>
    );
  }
}

export default Appbar;
