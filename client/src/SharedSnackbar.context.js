import React, { Component } from "react";
import SharedSnackbar from "./components/SharedSnackbar.component";

const SharedSnackbarContext = React.createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case "DISPLAY_ALERT":
      console.log(action.payload);
      return {
        ...state,
        isOpen: true,
        message: action.payload
      };
    default:
      return state;
  }
};

export class SharedSnackbarProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      message: "",
      dispatch: action => {
        this.setState(state => Reducer(state, action));
      }
    };
  }

  closeSnackbar = () => {
    this.setState({
      message: "",
      isOpen: false
    });
  };

  render() {
    return (
      <SharedSnackbarContext.Provider
        value={{
          closeSnackbar: this.closeSnackbar,
          snackbarIsOpen: this.state.isOpen,
          message: this.state.message,
          state: this.state
        }}
      >
        <SharedSnackbar />
        {this.props.children}
      </SharedSnackbarContext.Provider>
    );
  }
}

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;
