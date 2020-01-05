import React, { Component } from "react";
import { Typography } from "@material-ui/core";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: 1200,
    maxWidth: "90%",
    margin: "0 auto",
    marginBottom: 50
  },
  text: {
    fontSize: "2em",
    fontWeight: "300",
    color: "rgb(37,56,88)"
  },
  button: {
    marginTop: 20,
    marginBottom: 20
  },
  band: {
    marginBottom: 150
  },
  logoContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  header: {
    marginBottom: 30,
    fontSize: "2em",
    fontWeight: "300",
    color: "rgb(37,56,88)",
    textAlign: "center"
  },
  logo: {
    height: 50,
    margin: 10,
    marginTop: 30
  }
};

class About extends Component {
  render() {
    return (
      <div>
        <div style={styles.container}>
          <Typography style={styles.text}>
            PeachFlame is a creative digital studio offering editorial services
            to both authors and publishing companies.
          </Typography>
        </div>

        <div style={styles.band}>
          <Typography style={styles.header}>Who we've worked with</Typography>
          <div style={styles.logoContainer}>
            <img
              className="image_logo"
              style={styles.logo}
              src={require("../../images/iod.jpg")}
              alt="iod logo"
            />
            <img
              className="image_logo"
              style={styles.logo}
              src={require("../../images/utah.jpg")}
              alt="utah logo"
            />
            <img
              className="image_logo"
              style={styles.logo}
              src={require("../../images/oxford.png")}
              alt="oxford university logo"
            />
            <img
              className="image_logo"
              style={styles.logo}
              src={require("../../images/connect.png")}
              alt="connect logo"
            />
            <img
              className="image_logo"
              style={styles.logo}
              src={require("../../images/trilogy.jpg")}
              alt="trilogy logo"
            />
            <img
              className="image_logo"
              style={styles.logo}
              src={require("../../images/2u.jpg")}
              alt="2u logo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
