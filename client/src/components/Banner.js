import React, { Component } from "react";
import { Typography } from "@material-ui/core";

const styles = {
  appHeader: {
    background: "linear-gradient(to left, #00c6ff, #0072ff)",
    marginTop: 80,
    height: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    color: "#fff",
    fontSize: "3em"
  }
};

class Banner extends Component {
  render() {
    return (
      <div style={styles.appHeader}>
        <Typography style={styles.headerText}>{this.props.title}</Typography>
      </div>
    );
  }
}

export default Banner;
