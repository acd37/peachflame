import React, { Component, Fragment } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    padding: 50,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 50
  },
  text: {
    fontSize: "2em",
    fontWeight: "300",
    color: "rgb(37,56,88)"
  },
  button: {
    marginTop: 20,
    marginBottom: 20
  }
};

const QuoteLink = props => <Link to="/quote" {...props} />;

class WeDo extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Grid item xs={8}>
          <Grid container justify="center">
            <Typography style={styles.text}>
              PeachFlame is a creative studio that offers book editing, web
              design, and marketing services.
            </Typography>
            <Button
              style={styles.button}
              variant="contained"
              color="primary"
              size="large"
              component={QuoteLink}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default WeDo;
