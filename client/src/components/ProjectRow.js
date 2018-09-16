import React, { Component } from "react";
import { Typography, Paper, Divider } from "@material-ui/core";

const styles = {
  paper: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    marginLeft: 0,
    padding: 10
  },
  title: {
    textAlign: "left"
  }
};

class ProjectRow extends Component {
  render() {
    return (
      <Paper style={styles.paper}>
        <Typography variant="title" style={styles.title} gutterbottom>
          {this.props.title}
        </Typography>
        <Divider />
        <Typography variant="body2">
          Project Type: {this.props.project_type}
        </Typography>
        <Typography variant="body2">
          Project Manager: {this.props.project_manager}
        </Typography>
        <Typography variant="body2">
          Quote: ${this.props.quoted_amount}
        </Typography>
      </Paper>
    );
  }
}

export default ProjectRow;
