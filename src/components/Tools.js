import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import payments from "../images/credit-cards-payment.png";
import contracts from "../images/loan.png";
import chat from "../images/chat.png";
import time from "../images/clock-circular-outline.png";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    padding: 80,
    background: "#000046",
    background: "-webkit-linear-gradient(right, #000046, #1cb5e0)",
    background: "-o-linear-gradient(right, #000046, #1cb5e0)",
    background: "linear-gradient(to left, #00c6ff, #0072ff)"
  },
  text: {
    fontSize: "2em",
    fontWeight: "300",
    color: "#fff"
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 60,
    paddingBottom: 60
  },
  imageBox: {
    width: 275,
    marginRight: 20,
    marginLeft: 20
  },
  image: {
    height: 100,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 30,
    marginBottom: 30
  },
  snippet: {
    color: "#fff",
    fontSize: "1.2em"
  }
};

class Tools extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Typography style={styles.text}>
          Tools that make your life easier <strong>and</strong> and keep you
          secure.
        </Typography>

        <div style={styles.imageContainer}>
          <div style={styles.imageBox}>
            <img style={styles.image} src={chat} />
            <Typography style={styles.snippet}>
              We make the process as smooth as possible. We're happy to
              collaborate with you using any tools you like such as SMS, Slack,
              Skype, Email and many others.
            </Typography>
          </div>
          <div style={styles.imageBox}>
            <img style={styles.image} src={time} />
            <Typography style={styles.snippet}>
              Your time is precious, and we know you don't want to sit waiting
              to hear about updates. You can use our proprietary tracking
              software to check get workflow updates.
            </Typography>
          </div>
          <div style={styles.imageBox}>
            <img style={styles.image} src={contracts} />
            <Typography style={styles.snippet}>
              Security is your priority—so it's ours too. All terms and
              conditions are clearly laid out in our simple, human-readable
              contracts, no legalese, no small-print, no gotchas!
            </Typography>
          </div>
          <div style={styles.imageBox}>
            <img style={styles.image} src={payments} />
            <Typography style={styles.snippet}>
              All payments are accepted through secured and tested methods. We
              do not accept mailed cash or checks—we want there to be a paper
              trail, for your peace-of-mind.
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default Tools;
