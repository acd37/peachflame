import React, { Component } from "react";
import {
  Toolbar,
  Typography,
  Button,
  AppBar,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import logo from "../../images/peachflame.png";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppbarTray from "./AppbarTray";
import { logoutUser } from "../../actions/authActions";

const styles = {
  flex: {
    flexGrow: 1
  },
  logo: {
    marginRight: 10,
    maxHeight: 40
  },
  logoText: {
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
  }
};

class Appbar extends Component {
  state = {
    menuOpen: false
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  };

  handleMenuOpen = e => {
    const anchorEl = e.currentTarget;
    this.setState({
      ...this.state,
      menuOpen: !this.state.menuOpen,
      anchorEl
    });
  };

  handleClose = () => {
    this.setState({
      ...this.state,
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <AppBar style={styles.appBar} position="absolute">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 15
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <Link to="/">
              <img style={styles.logo} src={logo} alt="logo" />
            </Link>
            <Typography style={styles.logoText}>PeachFlame</Typography>
            <div class="appbar">
              <Button color="inherit">
                <Link style={styles.appBarButton} to="/">
                  Home
                </Link>
              </Button>
              <Button color="inherit">
                <Link style={styles.appBarButton} to="/services">
                  Editorial Services
                </Link>
              </Button>
              <Button color="inherit">
                <Link style={styles.appBarButton} to="/quote">
                  Start a Quote
                </Link>
              </Button>
              <Button color="inherit">
                <Link style={styles.appBarButton} to="/editor">
                  Meet the Editor
                </Link>
              </Button>
            </div>
          </div>
          <div>
            {isAuthenticated ? (
              <div class="appbar">
                <Button onClick={this.onLogoutClick} color="inherit">
                  <span style={styles.appBarButton}>Logout</span>
                </Button>

                <IconButton
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={this.handleMenuOpen}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={this.state.anchorEl}
                  keepMounted
                  open={this.state.menuOpen}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>
                    <Link style={styles.appBarButton} to="/dashboard">
                      Dashboard
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>
                    <Link style={styles.appBarButton} to="/dashboard/create">
                      Create Project
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>
                    <Link style={styles.appBarButton} to="/dashboard/account">
                      Account
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <div class="appbar">
                <Button color="inherit">
                  <Link style={styles.appBarButton} to="/login">
                    Login
                  </Link>
                </Button>
              </div>
            )}
          </div>

          <AppbarTray />
        </Toolbar>
      </AppBar>
    );
  }
}

Appbar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Appbar));
