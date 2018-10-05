import React, { Component } from "react";
import axios from "axios";
import { IconButton, Snackbar } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const ClientsContext = React.createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CLIENT":
      console.log(action.payload);
      return {
        ...state,
        clients: state.clients.filter(client => client._id !== action.payload)
      };
    case "DISPLAY_ALERT":
      console.log(action.payload);
      return {
        ...state,
        isOpen: true,
        message: action.payload
      };
    case "ADD_CLIENT":
      return {
        ...state,
        clients: [...state.clients, action.payload]
      };
    case "UPDATE_CLIENT":
      console.log(action.payload);
      return {
        ...state,
        clients: state.clients.map(
          client =>
            client._id === action.payload._id
              ? (client = action.payload)
              : client
        )
      };
    default:
      return state;
  }
};

export class ClientsProvider extends Component {
  state = {
    isOpen: false,
    message: "",
    clients: [],
    dispatch: action => {
      this.setState(state => Reducer(state, action));
    }
  };

  async componentDidMount() {
    let localToken = localStorage.getItem("peachflame");

    const res = await axios({
      url: "/api/users/get",
      method: "get",
      headers: {
        Authorization: localToken
      }
    });

    const clientsOnly = res.data.filter(
      client => client.client_type !== "Administrator"
    );

    this.setState({
      clients: clientsOnly
    });
  }

  closeSnackbar = () => {
    this.setState({
      message: "",
      isOpen: false
    });
  };

  render() {
    return (
      <ClientsContext.Provider
        value={{
          closeSnackbar: this.closeSnackbar,
          snackbarIsOpen: this.state.isOpen,
          message: this.state.message,
          state: this.state
        }}
      >
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={this.state.isOpen}
          autoHideDuration={3000}
          onClose={this.closeSnackbar}
          message={this.state.message}
          action={[
            <IconButton
              key="close"
              color="inherit"
              onClick={this.closeSnackbar}
            >
              <Close />
            </IconButton>
          ]}
        />
        {this.props.children}
      </ClientsContext.Provider>
    );
  }
}

export const ClientsConsumer = ClientsContext.Consumer;
