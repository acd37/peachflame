import React, { Component, Fragment } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography
} from "@material-ui/core";
import Banner from "../components/Banner";
import injectSheet, { jss, ThemeProvider } from "react-jss";

const styles = {
  choiceBoxContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  },
  choiceBox: {
    height: 250,
    width: 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,114,255, 0.7)",
    margin: 30,
    marginLeft: 0,
    padding: 20
  },
  choiceBoxText: {
    color: "rgb(244, 245, 247)",
    fontSize: "2em"
  }
};

class About extends Component {
  state = {
    hoverChoiceBox: false
  };

  render() {
    return (
      <Fragment>
        <Banner title="Dashboard" />

        <div style={styles.choiceBoxContainer}>
          <div style={styles.choiceBox}>
            <Typography style={styles.choiceBoxText}>Project Status</Typography>
          </div>
          <div style={styles.choiceBox}>
            <Typography style={styles.choiceBoxText}>
              Account Details
            </Typography>
          </div>
          <div style={styles.choiceBox}>
            <Typography style={styles.choiceBoxText}>Contact Us</Typography>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
