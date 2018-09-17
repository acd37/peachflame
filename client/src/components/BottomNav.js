import React, { Fragment, Component } from "react";
import logo from "../images/peachflame.png";
import twitter from "../images/twitter-logo-silhouette.png";
import fb from "../images/facebook.png";
import linked from "../images/linkedin.png";
import PrivacyPolicy from "./PrivacyPolicy";

const styles = {
  grid: {
    backgroundColor: "#191919",
    padding: 50
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    maxWidth: 80,
    marginLeft: -10
  },
  link: {
    color: "#eee",
    fontSize: "16px",
    textDecoration: "none",
    fontWeight: "600"
  },
  text: {
    color: "#eee",
    fontSize: "16px",
    fontWeight: "600"
  },
  title: {
    color: "#eee",
    fontSize: "18px",
    fontWeight: "800"
  },
  social_media: {
    height: "20px",
    marginRight: 10,
    marginLeft: 5
  },
  socialMediaContainer: {
    listStyleType: "none",
    padding: 0,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
};

class BottomNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      techIssue: "",
      emailInput: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <div style={styles.grid}>
          <div style={styles.logoContainer}>
            <img style={styles.img} src={logo} alt="iod logo" />

            <p style={styles.text}>&copy; PeachFlame, 2018-2019</p>
            <p style={styles.text}>help@peachflame.co</p>

            <div>
              <ul style={styles.socialMediaContainer}>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    style={styles.link}
                    href=""
                  >
                    <img
                      src={fb}
                      style={styles.social_media}
                      alt="social media icon"
                    />
                  </a>
                </li>
                {/* <li>
                  <a rel="noopener noreferrer" target="_blank" style={styles.link} href="https://twitter.com/insideoutdev">
                    <img src={twitter} style={styles.social_media} alt="social media icon" />
                  </a>
                </li> */}
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    style={styles.link}
                    href="https://www.linkedin.com/company/peachflameco/"
                  >
                    <img
                      src={linked}
                      style={styles.social_media}
                      alt="social media icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <PrivacyPolicy />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BottomNav;
