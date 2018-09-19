import React, { Component, Fragment } from "react";
import iod from "../images/companies/iod.png";
import utah from "../images/companies/utah.png";
import marketapts from "../images/companies/marketapts.png";
import cedarfort from "../images/companies/cedarfort.png";
import connect from "../images/companies/connect.png";
import { Typography } from "@material-ui/core";

const styles = {
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
    height: 40,
    margin: 10,
    marginTop: 30
  }
};

class CompanyBand extends Component {
  render() {
    return (
      <div style={styles.band}>
        <Typography style={styles.header}>Who we've worked with</Typography>
        <div style={styles.logoContainer}>
          <img
            className="image_logo"
            style={styles.logo}
            src={iod}
            alt="iod logo"
          />
          <img
            className="image_logo"
            style={styles.logo}
            src={utah}
            alt="utah logo"
          />
          <img
            className="image_logo"
            style={styles.logo}
            src={marketapts}
            alt="marketapts logo"
          />
          <img
            className="image_logo"
            style={styles.logo}
            src={cedarfort}
            alt="cedarfort logo"
          />
          <img
            className="image_logo"
            style={styles.logo}
            src={connect}
            alt="connect logo"
          />
        </div>
      </div>
    );
  }
}

export default CompanyBand;
