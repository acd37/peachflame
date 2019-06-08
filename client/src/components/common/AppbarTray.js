import React, { Component, Fragment } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {
    IconButton,
    Drawer,
    ListItem,
    List,
    ListItemText,
    Divider
} from '@material-ui/core';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
        const { isAuthenticated } = this.props.auth;

        const authLinks = (
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
                    <ListItem button component="a" href="/services">
                        <ListItemText primary="Editorial Services" />
                    </ListItem>
                    <ListItem button component="a" href="/quote">
                        <ListItemText primary="Start a Quote" />
                    </ListItem>
                    <ListItem button component="a" href="/editor">
                        <ListItemText primary="Meet the Editor" />
                    </ListItem>
                    <ListItem button component="a" href="/dashboard">
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button component="a" href="/dashboard/create">
                        <ListItemText primary="Create Project" />
                    </ListItem>
                    <ListItem button component="a" href="/dashboard/account">
                        <ListItemText primary="Account" />
                    </ListItem>
                    <Divider />
                </List>
            </div>
        );

        const guestLinks = (
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
                        <ListItemText primary="Editorial Services" />
                    </ListItem>
                    <ListItem button component="a" href="/quote">
                        <ListItemText primary="Start a Quote" />
                    </ListItem>
                    <ListItem button component="a" href="/about">
                        <ListItemText primary="Meet the Editor" />
                    </ListItem>
                    <ListItem button component="a" href="/login">
                        <ListItemText primary="Login" />
                    </ListItem>

                    <Divider />
                </List>
            </div>
        );

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
                    {isAuthenticated ? authLinks : guestLinks}
                </Drawer>
            </Fragment>
        );
    }
}

AppbarTray.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {}
)(AppbarTray);