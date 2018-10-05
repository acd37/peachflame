import React, { Component, Fragment } from "react";
import {
  Typography,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Build from "@material-ui/icons/Build";
import axios from "axios";
import { ClientsConsumer } from "../Clients.context";

const styles = {
  paper: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    padding: 20,
    minWidth: 275
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    textAlign: "left"
  },
  icon: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: 16,
    marginBottom: -5,
    marginLeft: 10,
    cursor: "pointer"
  },
  iconBox: {
    alignSelf: "flex-end"
  }
};

class ProjectRow extends Component {
  state = {
    delete_dialog: false,
    delete_dialog_id: ""
  };

  handleClickOpen = async id => {
    this.setState({
      delete_dialog: true,
      delete_dialog_id: id
    });
  };

  handleClose = () => {
    this.setState({ delete_dialog: false });
  };

  handleDeleteProject = async (id, user, dispatch) => {
    console.log(id + user);

    let localToken = localStorage.getItem("peachflame");

    if (localToken) {
      await axios({
        url: `/api/projects/delete/${user}/${id}`,
        method: "put",
        headers: {
          Authorization: localToken
        }
      }).then(res => {
        console.log(res.data);
        dispatch({ type: "UPDATE_CLIENT", payload: res.data });
        dispatch({
          type: "DISPLAY_ALERT",
          payload: res.data.success
        });
      });
    }
  };

  render() {
    return (
      <ClientsConsumer>
        {value => {
          const { dispatch } = value.state;
          const { id, user } = this.props;
          return (
            <Fragment>
              <Paper style={styles.paper}>
                <Typography variant="title" style={styles.title} gutterbottom>
                  {this.props.title}
                </Typography>
                <Typography component="p" color="textSecondary">
                  Project Type: {this.props.project_type}
                </Typography>
                <Typography component="p" color="textSecondary">
                  Project Manager: {this.props.project_manager}
                </Typography>
                <Typography component="p" color="textSecondary">
                  Quote: ${this.props.quoted_amount}
                </Typography>
                <div style={styles.iconBox}>
                  <DeleteIcon
                    style={styles.icon}
                    onClick={this.handleClickOpen.bind(this, id, user)}
                  />
                  <Build style={styles.icon} />
                </div>
              </Paper>

              <Dialog
                open={this.state.delete_dialog}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Are you sure?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete this client? All data will
                    be deleted and cannot be restored.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    No, cancel
                  </Button>
                  <Button
                    onClick={this.handleDeleteProject.bind(
                      this,
                      id,
                      user,
                      dispatch
                    )}
                    color="primary"
                  >
                    Yes, I'm sure
                  </Button>
                </DialogActions>
              </Dialog>
            </Fragment>
          );
        }}
      </ClientsConsumer>
    );
  }
}

export default ProjectRow;
