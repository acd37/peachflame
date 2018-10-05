import React, { Component, Fragment } from "react";
import { Typography } from "@material-ui/core";

const styles = {
  appHeader: {
    background: "linear-gradient(to left, #00c6ff, #0072ff)",
    marginTop: 80,
    height: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: "3em",
    marginTop: 40
  }
};

class Banner extends Component {
  render() {
    return (
      <Fragment>
        <div style={styles.appHeader} />
        <Typography variant="display4" style={styles.headerText}>
          {this.props.title}
        </Typography>
      </Fragment>
    );
  }
}

export default Banner;
