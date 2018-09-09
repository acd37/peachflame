import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4
  }
});

class Alert extends React.Component {
  queue = [];

  state = {
    open: false,
    messageInfo: {}
  };

  handleClick = message => () => {
    this.queue.push({
      message,
      key: new Date().getTime()
    });

    if (this.state.open) {
      // immediately begin dismissing current message
      // to start showing new one
      this.setState({ open: false });
    } else {
      this.processQueue();
    }
  };

  processQueue = () => {
    if (this.queue.length > 0) {
      this.setState({
        messageInfo: this.queue.shift(),
        open: true
      });
    }
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };

  handleExited = () => {
    this.processQueue();
  };

  render() {
    const { classes } = this.props;
    const { message, key } = this.state.messageInfo;
    return (
      <div>
        <Snackbar
          key={key}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          onExited={this.handleExited}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{message}</span>}
        />
      </div>
    );
  }
}

Alert.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Alert);
