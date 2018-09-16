import React, { Component, Fragment } from "react";
import {
  TableCell,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Collapse
} from "@material-ui/core";
import axios from "axios";
import { ClientsConsumer } from "../Clients.context";
import ProjectRow from "./ProjectRow";

const styles = {
  icon: {
    fontSize: 16,
    margin: "0px 5px",
    cursor: "pointer"
  },
  textField: {
    width: "90%"
  }
};

const project_managers = [
  {
    value: "Alec Down"
  },
  {
    value: "Kelsey Down"
  },
  {
    value: "Max Wheeler"
  }
];

const client_types = [
  {
    value: "Editorial"
  },
  {
    value: "Development"
  },
  {
    value: "Other"
  },
  {
    value: "Administrator"
  }
];

const project_types = [
  {
    value: "Editorial"
  },
  {
    value: "Development"
  },
  {
    value: "Other"
  }
];

class Client extends Component {
  state = {
    editClientDialogIsOpen: false,
    addProjectDialogIsOpen: false,
    first_name: "",
    last_name: "",
    email: "",
    _id: "",
    title: "",
    project_type: "",
    quoted_amount: "",
    project_manager: "",
    showProjects: false
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleDelete = async (id, dispatch) => {
    let localToken = localStorage.getItem("peachflame");

    if (localToken) {
      await axios({
        url: `api/users/${id}`,
        method: "delete",
        headers: {
          Authorization: localToken
        }
      });
      dispatch({ type: "DELETE_CLIENT", payload: id });
      dispatch({
        type: "DISPLAY_ALERT",
        payload: "Client was successfully deleted."
      });
    }
  };

  handleEditClientDialogOpen = props => {
    this.setState({
      editClientDialogIsOpen: true,
      first_name: this.props.client.first_name,
      last_name: this.props.client.last_name,
      email: this.props.client.email,
      _id: this.props.client._id,
      client_type: this.props.client.client_type
    });
  };

  handleEditClientDialogClose = () => {
    this.setState({ editClientDialogIsOpen: false });
  };

  handleUpdateClient = async (_id, dispatch) => {
    const { first_name, last_name, email, client_type } = this.state;

    const updatedClient = { first_name, last_name, email, client_type };

    let localToken = localStorage.getItem("peachflame");
    let id = this.state._id;
    this.handleEditClientDialogClose();
    if (localToken) {
      await axios.put(`api/users/${id}`, updatedClient).then(res => {
        dispatch({ type: "UPDATE_CLIENT", payload: res.data });
        dispatch({
          type: "DISPLAY_ALERT",
          payload: res.data.success
        });
      });
    }
  };

  handleAddProjectDialogOpen = props => {
    this.setState({
      addProjectDialogIsOpen: true
    });
  };

  handleAddProjectDialogClose = () => {
    this.setState({ addProjectDialogIsOpen: false });
  };

  handleAddProject = async (_id, dispatch) => {
    const { title, project_type, quoted_amount, project_manager } = this.state;
    const newProject = { title, project_type, quoted_amount, project_manager };

    let localToken = localStorage.getItem("peachflame");
    let id = _id;

    this.handleAddProjectDialogClose();

    if (localToken) {
      await axios.put(`api/projects/add/${id}`, newProject).then(res => {
        this.setState({
          title: "",
          project_type: "",
          quoted_amount: "",
          project_manager: ""
        });
        dispatch({ type: "UPDATE_CLIENT", payload: res.data });
        dispatch({
          type: "DISPLAY_ALERT",
          payload: res.data.success
        });
      });
    }
  };

  showProjects = () => {
    this.setState({
      showProjects: true
    });
  };

  hideProjects = () => {
    this.setState({
      showProjects: false
    });
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      _id,
      activeProjects,
      client_type
    } = this.props.client;

    return (
      <ClientsConsumer>
        {value => {
          const { dispatch } = value.state;

          return (
            <Fragment>
              <TableRow>
                <TableCell>{first_name}</TableCell>

                <TableCell>{last_name}</TableCell>

                <TableCell>{email}</TableCell>
                <TableCell>{client_type}</TableCell>

                <TableCell>{activeProjects.length}</TableCell>

                <TableCell>
                  <Button
                    onClick={this.handleAddProjectDialogOpen.bind(
                      this,
                      _id,
                      dispatch
                    )}
                  >
                    Add Project
                  </Button>
                </TableCell>
                <TableCell>
                  {this.state.showProjects ? (
                    <Button onClick={this.hideProjects}>Hide Projects</Button>
                  ) : (
                    <Button onClick={this.showProjects}>View Projects</Button>
                  )}
                </TableCell>
                <TableCell nowrap="true">
                  <i
                    className="material-icons"
                    style={styles.icon}
                    onClick={this.handleEditClientDialogOpen.bind(
                      this,
                      _id,
                      first_name,
                      last_name,
                      email,
                      dispatch
                    )}
                  >
                    edit
                  </i>
                  <i
                    className="material-icons"
                    style={styles.icon}
                    onClick={this.handleDelete.bind(this, _id, dispatch)}
                  >
                    delete
                  </i>
                </TableCell>
              </TableRow>

              {this.state.showProjects &&
                activeProjects.map(i => (
                  <ProjectRow
                    colSpan={6}
                    key={i}
                    title={i.title}
                    project_manager={i.project_manager}
                    quoted_amount={i.quoted_amount}
                    project_type={i.project_type}
                  />
                ))}

              <Dialog
                open={this.state.editClientDialogIsOpen}
                onClose={this.handleEditClientDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Edit client"}
                </DialogTitle>
                <DialogContent>
                  <TextField
                    style={styles.textField}
                    label="First name"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                    margin="normal"
                  />
                  <TextField
                    style={styles.textField}
                    label="Last name"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.handleChange}
                    margin="normal"
                  />
                  <TextField
                    style={styles.textField}
                    label="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    margin="normal"
                  />
                  <TextField
                    select
                    label="Select"
                    style={styles.textField}
                    value={this.state.client_type}
                    onChange={this.handleChange}
                    name="client_type"
                    helperText="Please select client type"
                    margin="normal"
                    SelectProps={{
                      MenuProps: {}
                    }}
                  >
                    {client_types.map(type => (
                      <MenuItem key={type.value} value={type.value}>
                        {type.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={this.handleEditClientDialogClose}
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={this.handleUpdateClient.bind(this, _id, dispatch)}
                    color="primary"
                    autoFocus
                  >
                    Update Client
                  </Button>
                </DialogActions>
              </Dialog>

              <Dialog
                open={this.state.addProjectDialogIsOpen}
                onClose={this.handleAddProjectDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Add project"}
                </DialogTitle>
                <DialogContent>
                  <TextField
                    style={styles.textField}
                    label="Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    margin="normal"
                  />
                  <TextField
                    select
                    label="Select"
                    style={styles.textField}
                    value={this.state.project_type}
                    onChange={this.handleChange}
                    name="project_type"
                    helperText="Please select project type"
                    margin="normal"
                    SelectProps={{
                      MenuProps: {}
                    }}
                  >
                    {project_types.map(type => (
                      <MenuItem key={type.value} value={type.value}>
                        {type.value}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    style={styles.textField}
                    label="Quoted amount"
                    name="quoted_amount"
                    value={this.state.quoted_amount}
                    onChange={this.handleChange}
                    margin="normal"
                  />
                  <TextField
                    select
                    label="Select"
                    style={styles.textField}
                    value={this.state.project_manager}
                    onChange={this.handleChange}
                    name="project_manager"
                    helperText="Please select project manager"
                    margin="normal"
                    SelectProps={{
                      MenuProps: {}
                    }}
                  >
                    {project_managers.map(type => (
                      <MenuItem key={type.value} value={type.value}>
                        {type.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={this.handleAddProjectDialogClose}
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={this.handleAddProject.bind(this, _id, dispatch)}
                    color="primary"
                    autoFocus
                  >
                    Add Project
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

export default Client;
