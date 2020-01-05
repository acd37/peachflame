import React, { Component } from "react";
import Banner from "../components/common/Banner";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import PropTypes from "prop-types";

const styles = {
  guestUser: {
    fontSize: "0.8rem",
    color: "rgba(0,0,0,0.6)"
  },
  pageWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  loginWrapper: {
    maxWidth: "90%",
    width: 300
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
  logo: {
    height: 100,
    width: 100,
    display: "block",
    margin: "20px auto"
  },
  textField: {
    width: "100%"
  },
  subHeading: {
    textAlign: "center",
    fontWeight: 300
  },
  errorMessage: {
    marginTop: 10,
    color: "#cc0000",
    fontSize: "0.8rem"
  },
  buttonLoading: {
    color: "#13c6e6",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  button: {
    width: 290,
    backgroundColor: "#fc7967",
    marginTop: 20,
    color: "#fff",
    fontWeight: 300,
    letterSpacing: 1.2,
    padding: "5px 30px"
  }
};

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps) {
      console.log(nextProps.errors);
      this.setState({
        errors: nextProps.errors.password
      });
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleLoginUser = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    return (
      <div style={styles.pageWrapper}>
        <Banner title="Login" />

        <div style={styles.loginWrapper}>
          <img
            src={require("../images/peachflame.jpg")}
            style={styles.logo}
            alt="cs logo"
          />
          <form autoComplete="off" onSubmit={this.handleLoginUser}>
            <input
              style={styles.customInput}
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange("email")}
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
            <Button type="submit" style={styles.button}>
              Login
            </Button>
          </form>
          <div>
            <p style={styles.guestUser}>
              {" "}
              To test, enter 'guest@gmail.com' as the username and 'password' as
              the password.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
