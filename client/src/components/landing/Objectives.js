import React, { Component } from "react";
import { Typography } from "@material-ui/core";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: "rgb(244, 245, 247)",
    paddingBottom: 80,
    textAlign: "center"
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
    marginRight: 20,
    marginLeft: 20
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

class Objectives extends Component {
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
          Editorial services that get your manuscript where it needs to be{" "}
          <strong>and</strong> keep you on the path to publication.
        </Typography>

        <div style={styles.imageContainer}>
          <div style={styles.imageBox}>
            <img
              style={styles.image}
              src={require("../../images/chat.png")}
              alt="chat"
            />
            <Typography style={styles.snippetHeader}>
              Clear Communication
            </Typography>
            <Typography style={styles.snippet}>
              We communicate with you 1:1 through multiple stages of editing,
              from initial consultations, keeping you up to date on the progress
              of your manuscript, to offering next-step suggestions.
            </Typography>
          </div>
          <div style={styles.imageBox}>
            <img
              style={styles.image}
              src={require("../../images/contract.png")}
              alt="contracts"
            />
            <Typography style={styles.snippetHeader}>
              Clear Expectations
            </Typography>
            <Typography style={styles.snippet}>
              We use clear, human-readable contracts, no legalese, no
              small-print, no gotchas! You'll know exactly what it's going to
              cost and how long it's going to take once we return your sample
              edit.
            </Typography>
          </div>
          <div style={styles.imageBox}>
            <img
              style={styles.image}
              src={require("../../images/credit-cards-payment.png")}
              alt="payments"
            />
            <Typography style={styles.snippetHeader}>
              Digital Security
            </Typography>
            <Typography style={styles.snippet}>
              We use only the latest technologies in online security for payment
              processing. We know that editing your manuscript is a financial
              investment, and we want you to feel secure in that.
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}
export default Objectives;
