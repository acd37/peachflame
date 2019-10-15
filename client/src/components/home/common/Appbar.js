import React, { Component } from 'react';
import { Toolbar, Typography, Button, Grid, AppBar } from '@material-ui/core';
import logo from '../../images/peachflame.png';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppbarTray from './AppbarTray';
import { logoutUser } from '../../actions/authActions';

const styles = {
    flex: {
        flexGrow: 1
    },
    logo: {
        maxHeight: 40,
        marginRight: 10
    },
    logoText: {
        margin: 30,
        marginLeft: 0,
        fontWeight: '800',
        fontSize: 24,
        color: 'rgb(37,56,88)'
    },
    appBar: {
        backgroundColor: 'rgb(244, 245, 247)',
        boxShadow: 'none'
    },
    appBarButton: {
        color: 'rgb(37,56,88)',
        fontSize: '1em',
        textTransform: 'capitalize',
        textDecoration: 'none'
    },
    loginButton: {
        position: 'absolute',
        right: 0
    },
    logoutButton: {
        position: 'absolute',
        right: 0
    },
    dashboardButton: {
        position: 'absolute',
        right: 100
    }
};

class Appbar extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    };

    render() {
        const { isAuthenticated } = this.props.auth;

        const authLinks = (
            <div id="appbar">
                <Button color="inherit">
                    <Link style={styles.appBarButton} to="/">
                        Home
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link style={styles.appBarButton} to="/services">
                        Editorial Services
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link style={styles.appBarButton} to="/quote">
                        Start a Quote
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link style={styles.appBarButton} to="/editor">
                        Meet the Editor
                    </Link>
                </Button>

                <Button color="inherit">
                    <Link style={styles.appBarButton} to="/dashboard">
                        Dashboard
                    </Link>
                </Button>

                <Button color="inherit">
                    <Link style={styles.appBarButton} to="/dashboard/create">
                        Create Project
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link style={styles.appBarButton} to="/dashboard/account">
                        Account
                    </Link>
                </Button>

                <Button
                    style={styles.logoutButton}
                    onClick={this.onLogoutClick}
                    color="inherit"
                >
                    <span style={styles.appBarButton}>Logout</span>
                </Button>
            </div>
        );

        const guestLinks = (
            <div id="appbar">
                <Button color="inherit">
                    <Link style={styles.appBarButton} to="/">
                        Home
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link style={styles.appBarButton} to="/services">
                        Editorial Services
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link style={styles.appBarButton} to="/quote">
                        Start a Quote
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link style={styles.appBarButton} to="/editor">
                        Meet the Editor
                    </Link>
                </Button>

                <Button style={styles.dashboardButton} color="inherit">
                    <Link style={styles.appBarButton} to="/login">
                        Login
                    </Link>
                </Button>
            </div>
        );

        return (
            <AppBar style={styles.appBar} position="absolute">
                <Grid container justify="center">
                    <Grid item xs={10}>
                        <Toolbar>
                            <Link to="/">
                                <img
                                    style={styles.logo}
                                    src={logo}
                                    alt="logo"
                                />
                            </Link>
                            <Typography style={styles.logoText}>
                                PeachFlame
                            </Typography>

                            {isAuthenticated ? authLinks : guestLinks}
                            <AppbarTray />
                        </Toolbar>
                    </Grid>
                </Grid>
            </AppBar>
        );
    }
}

Appbar.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(withRouter(Appbar));
