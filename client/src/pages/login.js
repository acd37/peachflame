import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";
import axios from "axios";
import { TextField, Button, Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const styles = {
  container: {
    marginTop: 30,
    marginBottom: 30,
    padding: 30
  }
};

class Login extends Component {
  state = {
    errors: {},
    email: "",
    password: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleLoginUser = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/api/users/login", user)
      .then(res => {
        this.setState({
          email: "",
          password: ""
        });
        console.log(res.data);
        this.props.updateAuth(res);
        localStorage.setItem("peachflame", res.data.user.token);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Fragment>
        <Banner title="Login" />

        <Grid container style={styles.root} justify="center">
          <Grid item xs={12}>
            <Grid container justify="space-around">
              <form
                style={styles.container}
                autoComplete="off"
                onSubmit={this.handleLoginUser}
              >
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                  margin="normal"
                  fullWidth
                />

                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  value={this.state.password}
                  autoComplete="current-password"
                  onChange={this.handleChange("password")}
                  margin="normal"
                  fullWidth
                />

                <Button
                  style={styles.loginButton}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Login
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Login;
