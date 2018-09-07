import React from "react";
import { Toolbar, Typography, Button, Grid, AppBar } from "@material-ui/core";
import logo from "../images/peachflame.png";
import { Link } from "react-router-dom";

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
  }
};

const LoginLink = props => <Link to="/login" {...props} />;

export default function Appbar() {
  return (
    <AppBar style={styles.appBar} position="absolute">
      <Grid container justify="center">
        <Grid item xs={10}>
          <Toolbar>
            <img style={styles.logo} src={logo} />
            <Typography style={styles.logoText} variant="title">
              PeachFlame
            </Typography>

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

            <Button
              style={styles.loginButton}
              variant="contained"
              color="primary"
              component={LoginLink}
            >
              Login
            </Button>
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
}
