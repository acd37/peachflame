import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import payments from "../images/credit-cards-payment.png";
import contracts from "../images/contract.png";
import chat from "../images/chat.png";
import time from "../images/clock.png";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "rgb(244, 245, 247)",
    paddingBottom: 80
  },
  text: {
    fontSize: "2em",
    fontWeight: "300",
    color: "rgb(37,56,88)"
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
    width: 325,
    marginRight: 40,
    marginLeft: 40
  },
  image: {
    height: 60,
    marginTop: 30,
    marginBottom: 30
  },
  snippetHeader: {
    color: "rgb(37,56,88)",
    fontSize: "1.2em",
    marginBottom: 20,
    fontWeight: 600
  },
  snippet: {
    color: "rgb(37,56,88)",
    fontSize: "1em"
  },
  link: {
    color: "#fc7867",
    fontSize: "1em",
    marginTop: 10
  },
  svg: {
    width: "100%",
    transform: "translateY(-80px)"
  }
};

class Tools extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.svg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(244, 245, 247)"
            opacity="1"
            width="100%"
            height="80"
            preserveAspectRatio="none"
            viewBox="0 0 1600 200"
          >
            <path
              d="M-8,95.3C-8,95.3,189,2,398,2s604,184.7,800,184.7s412-91.4,412-91.4V271H-8V95.3
  z"
            />
            <path
              d="M1610,95.3c0,0-216,80-412,80c-98,0-245.8-40.5-395.1-80.9
  c149.4,46.2,297.1,92.3,395.1,92.3C1394,186.7,1610,95.3,1610,95.3z"
            />
          </svg>
        </div>
        <Typography style={styles.text}>
          Tools that make your life easier <strong>and</strong> and keep you
          secure.
        </Typography>

        <div style={styles.imageContainer}>
          <div style={styles.imageBox}>
            <img style={styles.image} src={chat} />
            <Typography style={styles.snippetHeader}>
              Collaboration Tools
            </Typography>
            <Typography style={styles.snippet}>
              We're happy to collaborate with you using the tools you like.
            </Typography>
            <Typography style={styles.link}>Learn more </Typography>
          </div>
          <div style={styles.imageBox}>
            <img style={styles.image} src={time} />
            <Typography style={styles.snippetHeader}>
              Efficient Management
            </Typography>
            <Typography style={styles.snippet}>
              Use our proprietary tracking software to check get workflow
              updates.
            </Typography>
            <Typography style={styles.link}>Learn more </Typography>
          </div>
          <div style={styles.imageBox}>
            <img style={styles.image} src={contracts} />
            <Typography style={styles.snippetHeader}>
              Clear Expectations
            </Typography>
            <Typography style={styles.snippet}>
              We use clear, human-readable contracts, no legalese, no
              small-print, no gotchas!
            </Typography>
            <Typography style={styles.link}>Learn more </Typography>
          </div>
          <div style={styles.imageBox}>
            <img style={styles.image} src={payments} />
            <Typography style={styles.snippetHeader}>
              Digital Security
            </Typography>
            <Typography style={styles.snippet}>
              We use only the latest technologies in online security.
            </Typography>
            <Typography style={styles.link}>Learn more </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default Tools;
