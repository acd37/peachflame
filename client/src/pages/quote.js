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
    fontSize: "1em",
    color: "#fff"
  },
  formTextHeader: {
    fontSize: "2em",
    marginTop: 20,
    marginBottom: 20
  },
  botTextBox: {
    backgroundColor: "#0072ff",
    padding: 7,
    margin: 5,
    borderRadius: 3
  }
};

const services = [
  {
    name: "a",
    value: "Editorial"
  },
  {
    name: "b",
    value: "Development"
  },
  {
    name: "c",
    value: "Content Creation."
  }
];

const developmentChoices = [
  {
    name: "a",
    value: "A website built on Wordpress, Wix or other templating engine."
  },
  {
    name: "b",
    value: "A custom built website"
  },
  {
    name: "c",
    value:
      "A custom built piece of software that integrates databases and server-side code."
  }
];

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
            <Grid container justify="space-around" />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Quote;
