import React from "react";

const styles = {
  customInputLabel: {
    display: "block",
    marginTop: 20,
    marginBottom: -15,
    fontSize: "0.7rem",
    color: "#999"
  }
};

export default function InputLabel(props) {
  return (
    <label htmlFor={props.htmlFor} style={styles.customInputLabel}>
      {props.text}
    </label>
  );
}
