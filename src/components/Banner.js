import React, { Component, Fragment } from "react";
import { Typography } from "@material-ui/core";

const styles = {
  appHeader: {
    background: "#000046",
    background: "-webkit-linear-gradient(right, #00c6ff, #0072ff)",
    background: "-o-linear-gradient(right, #00c6ff, #0072ff)",
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
