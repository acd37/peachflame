import React, { Component, Fragment } from 'react';
import Banner from '../components/common/Banner';
import { Button, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import PropTypes from 'prop-types';

const styles = {
    guestUser: {
        fontSize: '0.8rem',
        color: 'rgba(0,0,0,0.6)'
    },
    loginWrapper: {
        maxWidth: '90%',
        width: 300,
        margin: '20px auto'
    },
    customInput: {
        border: 'none',
        marginTop: 20,
        padding: 20,
        boxShadow: '0 12px 15px rgba(0,0,0,0.1), 0 17px 50px rgba(0,0,0,0.1)',
        borderRadius: '.375rem',
        width: 260
    },
    customInputLabel: {
        display: 'block',
        marginTop: 20,
        marginBottom: -15,
        fontSize: '0.7rem',
        color: '#999'
    },
    logo: {
        height: 100,
        width: 100,
        display: 'block',
        margin: '20px auto'
    },
    button: {
        marginTop: 20
    },
    textField: {
        width: '100%'
    },
    subHeading: {
        textAlign: 'center',
        fontWeight: 300
    },
    errorMessage: {
        marginTop: 10,
        color: '#cc0000',
        fontSize: '0.8rem'
    },
    buttonLoading: {
        color: '#13c6e6',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12
    },
    button: {
        width: 300,
        backgroundColor: '#fc7967',
        marginTop: 20,
        color: '#fff',
        fontWeight: 300,
        letterSpacing: 1.2,
        padding: '5px 30px'
    },
    passwordWrapper: {
        position: 'relative'
    },
    passwordToggler: {
        position: 'absolute',
        right: 0,
        top: '45px'
    }
};

class Login extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }

        console.log(nextProps);
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleLoginUser = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render() {
        return (
            <Fragment>
                <Banner title="Login" />

                <div style={styles.loginWrapper}>
                    <img
                        src={require('../images/peachflame.png')}
                        style={styles.logo}
                        alt="cs logo"
                    />
                    <form autoComplete="off" onSubmit={this.handleLoginUser}>
                        <label htmlFor="email" style={styles.customInputLabel}>
                            Email
                        </label>

                        <input
                            style={styles.customInput}
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                        />

                        <label
                            htmlFor="password"
                            style={styles.customInputLabel}
                        >
                            Password
                        </label>
                        <div style={styles.passwordWrapper}>
                            <input
                                type={
                                    this.state.showPassword
                                        ? 'text'
                                        : 'password'
                                }
                                style={styles.customInput}
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                            />

                            <InputAdornment style={styles.passwordToggler}>
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                >
                                    {this.state.showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        </div>

                        <Button type="submit" style={styles.button}>
                            Login
                        </Button>
                    </form>
                    <div>
                        <p style={styles.guestUser}>
                            {' '}
                            To test, enter 'guest@gmail.com' as the username and
                            'password' as the password.
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
