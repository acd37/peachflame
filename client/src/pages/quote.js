import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";
import {
  TextField,
  MenuItem,
  Button,
  Grid,
  Typography
} from "@material-ui/core";

const styles = {
  container: {
    marginTop: 30,
    marginBottom: 30,
    padding: 30,
    width: 600,
    maxWidth: "90%"
  },
  formText: {
    fontSize: "1em"
  },
  formTextHeader: {
    fontSize: "2em",
    marginTop: 20,
    marginBottom: 20
  }
};

const services = ["Editorial", "Development", "Content Creation"];

class Quote extends Component {
  state = {
    service: "",
    name: "",
    service: "",
    formComplete: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <Fragment>
        <Banner title="Quote" />

        <Grid container style={styles.root} justify="center">
          <Grid item xs={12}>
            <Grid container justify="space-around">
              <form style={styles.container} autoComplete="off">
                <TextField
                  id="name"
                  label="Name"
                  value={this.state.name}
                  onChange={this.handleChange("name")}
                  margin="normal"
                  fullWidth
                />

                {this.state.name ? (
                  <Fragment>
                    <Typography style={styles.formText}>
                      Hi, {this.state.name}! <br /> We are looking forward to
                      getting started with you. <br /> What kind of service are
                      you interested in today?
                    </Typography>
                    <TextField
                      id="select-service"
                      select
                      label="Select"
                      value={this.state.service}
                      onChange={this.handleChange("service")}
                      margin="normal"
                      fullWidth
                    >
                      {services.map(service => (
                        <MenuItem key={service} value={service}>
                          {service}
                        </MenuItem>
                      ))}
                    </TextField>

                    {this.state.service === "Development" && (
                      <Fragment>
                        <Typography style={styles.formText}>
                          {" "}
                          Great, you're interested in {this.state.service}.{" "}
                          <br />
                          Let's get the details we need, just a few more
                          questions!
                        </Typography>
                        <Typography style={styles.formTextHeader}>
                          {this.state.service}
                        </Typography>
                      </Fragment>
                    )}

                    {this.state.service === "Editorial" && (
                      <Fragment>
                        <Typography style={styles.formText}>
                          {" "}
                          Great, you're interested in {this.state.service}.{" "}
                          <br />
                          Let's get the details we need, just a few more
                          questions!
                        </Typography>
                        <Typography style={styles.formTextHeader}>
                          {this.state.service}
                        </Typography>
                      </Fragment>
                    )}

                    {this.state.service === "Content Creation" && (
                      <Fragment>
                        <Typography style={styles.formText}>
                          {" "}
                          Great, you're interested in {this.state.service}.{" "}
                          <br />
                          Let's get the details we need, just a few more
                          questions!
                        </Typography>
                        <Typography style={styles.formTextHeader}>
                          {this.state.service}
                        </Typography>
                      </Fragment>
                    )}
                  </Fragment>
                ) : null}

                {this.state.formComplete && (
                  <Button
                    style={styles.loginButton}
                    variant="contained"
                    color="primary"
                  >
                    Submit Quote
                  </Button>
                )}
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Quote;
