import React, { Component, Fragment } from "react";
import Client from "../components/Client";
import axios from "axios";
import { ClientsConsumer } from "../Clients.context";
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem
} from "@material-ui/core";

const styles = {
  tableContainer: {
    margin: "20px auto",
    maxWidth: "100%",
    overflowX: "auto"
  },
  textField: {
    width: "90%"
  },
  buttonRow: {
    marginLeft: 20
  }
};

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

class ManageClients extends Component {
  state = {
    addClientDialogIsOpen: false,
    first_name: "",
    last_name: "",
    email: "",
    client_type: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleAddClientDialogOpen = () => {
    this.setState({ addClientDialogIsOpen: true });
  };

  handleAddClientDialogClose = () => {
    this.setState({ addClientDialogIsOpen: false });
  };

  handleAddClient = async dispatch => {
    const { first_name, last_name, email, client_type } = this.state;

    const newClient = { first_name, last_name, email, client_type };

    let localToken = localStorage.getItem("peachflame");

    if (localToken) {
      await axios.post("api/users/register", newClient).then(res => {
        this.handleAddClientDialogClose();
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          client_type: ""
        });
        dispatch({ type: "ADD_CLIENT", payload: res.data });
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
          const { clients, dispatch } = value.state;

          return (
            <Fragment>
              <div style={styles.tableContainer}>
                <div style={styles.buttonRow}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleAddClientDialogOpen}
                  >
                    Add Client
                  </Button>
                </div>

                <Table style={styles.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Client Type</TableCell>
                      <TableCell>Active Projects</TableCell>
                      <TableCell />
                      <TableCell />
                      <TableCell />
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {clients.map(client => (
                      <Client key={client._id} client={client} />
                    ))}
                  </TableBody>
                </Table>
              </div>
              <Dialog
                open={this.state.addClientDialogIsOpen}
                onClose={this.handleAddClientDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Add new client"}
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
                    onClick={this.handleAddClientDialogClose}
                    color="primary"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={this.handleAddClient.bind(this, dispatch)}
                    color="primary"
                    autoFocus
                  >
                    Add Client
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

export default ManageClients;
