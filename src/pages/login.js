import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";
import { TextField, Button, Grid } from "@material-ui/core";

const styles = {
  container: {
    marginTop: 30,
    marginBottom: 30,
    padding: 30
  }
};

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <Fragment>
        <Banner title="Login" />

        <Grid container style={styles.root} justify="center">
          <Grid item xs={12}>
            <Grid container justify="space-around">
              <form style={styles.container} autoComplete="off">
                <TextField
                  id="email"
                  label="Email"
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                  margin="normal"
                  fullWidth
                />

                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  onChange={this.handleChange("password")}
                  margin="normal"
                  fullWidth
                />

                <Button
                  style={styles.loginButton}
                  variant="contained"
                  color="primary"
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
