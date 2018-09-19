import React, { Component, Fragment } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  IconButton,
  Drawer,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  Divider
} from "@material-ui/core";
import { Person, Home } from "@material-ui/icons";

const styles = {
  list: {
    width: 250
  }
};

class AppbarTray extends Component {
  state = {
    right: false
  };

  toggleDrawer = open => () => {
    this.setState({
      right: open
    });
  };

  render() {
    return (
      <Fragment>
        <div id="optimized_appbar">
          <IconButton
            onClick={this.toggleDrawer(true)}
            color="default"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
        </div>

        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <List style={styles.list} component="nav">
              <ListItem button component="a" href="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component="a" href="/editing">
                <ListItemText primary="Editing" />
              </ListItem>
              <ListItem button component="a" href="/development">
                <ListItemText primary="Web Design" />
              </ListItem>
              <ListItem button component="a" href="/quote">
                <ListItemText primary="Start a Quote" />
              </ListItem>
              <ListItem button component="a" href="/about">
                <ListItemText primary="Meet the Team" />
              </ListItem>
              <Divider />

              {!this.props.authedUser.isLoggedIn ? (
                <Fragment>
                  <ListItem button component="a" href="/login">
                    <ListItemIcon>
                      <Person />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                  </ListItem>
                </Fragment>
              ) : (
                <Fragment>
                  <ListItem button component="a" href="/admin">
                    <ListItemText primary="Back to Dashboard" />
                  </ListItem>
                  <ListItem onClick={this.props.logout} button>
                    <ListItemText primary="Logout" />
                  </ListItem>
                </Fragment>
              )}
            </List>
          </div>
        </Drawer>
      </Fragment>
    );
  }
}

export default AppbarTray;
