import React, { Component } from "react";
import { getUserProjects } from "../../actions/projectActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LinearProgress } from "@material-ui/core/";
import Banner from "../common/Banner";
import { Link } from "react-router-dom";
import Data from "../data/Data";
import Table from "./Table";

const styles = {
  peachAlert: {
    margin: "0 auto",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 0,
    backgroundColor: "#fdd9d7",
    color: "#7f231c",
    textAlign: "center",
    maxWidth: "90%",
    width: 800
  },
  loadingWrapper: {
    margin: "100px auto",
    maxWidth: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  logo: {
    height: 75,
    width: 75,
    display: "block",
    margin: "20px auto"
  },
  progress: {
    width: 400,
    maxWidth: "90%",
    display: "block",
    margin: "20px auto",
    height: 12,
    borderRadius: 20
  },
  loadingText: {
    textAlign: "center",
    color: "#5e5e5e",
    fontWeight: 300,
    fontSize: "1.3rem"
  },
  noProjects: {
    textAlign: "center",
    marginBottom: 30
  }
};

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUserProjects();
  }

  render() {
    const { loading, projects } = this.props.projects;
    let content;

    if (loading) {
      content = (
        <div style={styles.loadingWrapper}>
          <img
            src={require("../../images/peachflame.jpg")}
            style={styles.logo}
            alt="cs logo"
          />
          <p style={styles.loadingText}>Loading data...</p>
          <LinearProgress style={styles.progress} color="primary" />
        </div>
      );
    } else {
      content = (
        <div>
          <Banner title="Dashboard" />
          {(new Date().getMonth() === 2 && new Date().getDate() > 14) ||
          (new Date().getMonth() === 5 && new Date().getDate() > 14) ||
          (new Date().getMonth() === 8 && new Date().getDate() > 14) ||
          (new Date().getMonth() === 11 && new Date().getDate() > 14) ? (
            <div style={styles.peachAlert}>
              {" "}
              <strong>Alert: </strong>Don't forget your estimated tax payment{" "}
            </div>
          ) : (
            ""
          )}

          <Data />
          <Table projects={projects} />

          {projects.length < 1 && (
            <p style={styles.noProjects}>
              {" "}
              There are no projects here yet.{" "}
              <Link to="/dashboard/create/">Get started! </Link>{" "}
            </p>
          )}
        </div>
      );
    }

    return <div>{content}</div>;
  }
}

Dashboard.propTypes = {
  getUserProjects: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  projects: state.projects,
  auth: state.auth
});

export default connect(mapStateToProps, { getUserProjects })(Dashboard);
