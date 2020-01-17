import React from "react";

const styles = {
  customInput: {
    border: "none",
    marginTop: 20,
    marginRight: 20,
    padding: 20,
    boxShadow: "0 12px 15px rgba(0,0,0,0.1), 0 17px 50px rgba(0,0,0,0.1)",
    borderRadius: ".375rem",
    width: 400,
    fontWeight: 300,
    fontSize: "0.9rem",
    color: "rgba(0,0,0,0.8)"
  }
};

export default function CustomInput(props) {
  return (
    <input
      step={props.step && props.step}
      type={props.type}
      style={styles.customInput}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
