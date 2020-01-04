import React from "react";
import { KeyboardBackspace } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

const styles = {
  linkButton: {
    color: "#fff",
    textDecoration: "none"
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

function BackButton(props) {
  return (
    <Button style={styles.button} startIcon={<KeyboardBackspace />}>
      <Link style={styles.linkButton} to={props.link}>
        {props.label}
      </Link>
    </Button>
  );
}

export default withRouter(BackButton);
