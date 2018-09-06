import React, { Fragment } from "react";
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
  }
};

export default function Appbar() {
  return (
    <Fragment>
      <AppBar style={styles.appBar} position="absolute">
        <Grid item xs={8}>
          <Grid container justify="center">
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
                <Link style={styles.appBarButton} to="/about">
                  Meet the Team
                </Link>
              </Button>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </Fragment>
  );
}
