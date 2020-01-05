import React, { Component, Fragment } from "react";

const styles = {
  appHeader: {
    background: "linear-gradient(to left, #00c6ff, #0072ff)",
    height: 500,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  svg: {
    width: "100%",
    transform: "translateY(-80px)"
  },
  header: {
    fontWeight: "600",
    marginBottom: 0,
    fontSize: "7em",
    letterSpacing: 1.2,
    maxWidth: "100%"
  },
  subHeader: {
    fontWeight: "400",
    marginTop: 0,
    fontSize: "2em"
  },
  cardImage: {
    maxHeight: "80px",
    marginRight: 5,
    marginLeft: 5
  }
};

class Header extends Component {
  render() {
    return (
      <Fragment>
        <div style={styles.appHeader}>
          <h1 id="page_header" style={styles.header}>
            {" "}
            PeachFl
            <img
              style={styles.cardImage}
              src={require("../../images/peachflame.jpg")}
              alt="logo"
              id="logo"
            />
            me{" "}
          </h1>
          <h2 style={styles.subHeader}> Editorial Services </h2>
        </div>
        <div style={styles.svg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
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
      </Fragment>
    );
  }
}

export default Header;
