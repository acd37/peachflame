import React, { Component } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    width: 1200,
    maxWidth: "90%",
    margin: "0 auto",
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
        <Typography style={styles.text}>
          PeachFlame is a creative studio offering manuscript editorial
          services, web development and design, custom software design and
          content creation.
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
      </div>
    );
  }
}

export default WeDo;
