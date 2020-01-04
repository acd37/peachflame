import React from "react";
import { Button } from "@material-ui/core";

const styles = {
  button: {
    backgroundColor: "#fc7967",
    marginTop: 20,
    color: "#fff",
    fontWeight: 300,
    letterSpacing: 1.2,
    padding: "5px 30px"
  }
};

export default function CustomButton(props) {
  return (
    <Button type={props.type} style={styles.button}>
      {props.text}
    </Button>
  );
}
