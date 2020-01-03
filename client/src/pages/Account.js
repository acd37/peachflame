import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "@material-ui/core/";
import Banner from "../components/common/Banner";
import { updatePassword } from "../actions/authActions";
import { createMessage } from "../actions/messageActions";

const styles = {
  container: {
    padding: 30,
    margin: "0 auto",
    width: 960,
    maxWidth: "90%"
  },
  loadingWrapper: {
    margin: "30px auto",
    maxWidth: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  logo: {
    marginTop: 80,
    height: 75,
    width: 75,
    display: "block",
    margin: "20px auto"
  },
  progress: {
    width: 250,
    display: "block",
    margin: "20px auto"
  },
  loadingText: {
    textAlign: "center",
    color: "#5e5e5e",
    fontWeight: 300,
    fontSize: "1.3rem"
  },
  linkButton: {
    color: "#fff",
    textDecoration: "none"
  },
  customInput: {
    border: "none",
    marginTop: 20,
    padding: 15,
    boxShadow: "0 12px 15px rgba(0,0,0,0.1), 0 17px 50px rgba(0,0,0,0.1)",
    borderRadius: ".375rem",
    width: 260,
    fontWeight: 300,
    fontSize: "1rem"
  },
  button: {
    backgroundColor: "#fc7967",
    marginTop: 20,
    color: "#fff",
    fontWeight: 300,
    letterSpacing: 1.2,
    padding: "5px 30px"
  }
};

class Account extends Component {
  state = {
    currentPass: "",
    password: "",
    password2: ""
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }

    if (nextProps.auth.passwordChanged.success) {
      this.setState({
        currentPass: "",
        password: "",
        password2: ""
      });
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleUpdatePassword = e => {
    e.preventDefault();

    const data = {
      currentPass: this.state.currentPass,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.updatePassword(data);
  };

  render() {
    return (
      <div>
        <Banner title="Account" />

        <div style={styles.container}>
          <h2 style={{ textAlign: "left" }}> Update Password </h2>
          <form autoComplete="off" onSubmit={this.handleUpdatePassword}>
            <input
              type="password"
              style={styles.customInput}
              placeholder="Current password"
              name="currentPass"
              value={this.state.currentPass}
              onChange={this.handleChange("currentPass")}
            />
            <div style={styles.passwordWrapper}>
              <input
                type="password"
                style={styles.customInput}
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange("password")}
              />
            </div>
            <div style={styles.passwordWrapper}>
              <input
                type="password"
                style={styles.customInput}
                placeholder="Re-type password"
                name="password2"
                value={this.state.password2}
                onChange={this.handleChange("password2")}
              />
            </div>

            <Button type="submit" style={styles.button}>
              Update
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

Account.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { updatePassword, createMessage })(
  Account
);
