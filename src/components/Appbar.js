import React, { Fragment } from "react";
import { Toolbar, Typography, Button, Grid, AppBar } from "@material-ui/core";
import logo from "../images/peachflame.png";

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
    textTransform: "capitalize"
  },
  separator: {
    height: 120,
    backgroundColor: "#fff"
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
              <Button style={styles.appBarButton} color="inherit">
                About
              </Button>
              <Button style={styles.appBarButton} color="inherit">
                Editing
              </Button>
              <Button style={styles.appBarButton} color="inherit">
                Web Design
              </Button>
              <Button style={styles.appBarButton} color="inherit">
                Tools
              </Button>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
      <div style={styles.separator} />
    </Fragment>
  );
}
