import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

// components
import Alerts from './components/layout/Alerts';
import { Provider as AlertProvider } from 'react-alert';
import PrivateRoute from './components/common/PrivateRoute';
import Landing from './components/landing/Landing';
import Login from './pages/Login';
import Dashboard from './components/dashboard/Dashboard';
import Services from './components/services/Services';
import Editor from './pages/Editor';
import CreateProject from './pages/CreateProject';
import EditProject from './pages/EditProject';
import Quote from './components/quote/Quote';
import Appbar from './components/common/Appbar';
import Footer from './components/common/Footer';
import Account from './pages/Account';

// redux
import { setCurrentUser, logoutUser } from './actions/authActions';

// persistent login
if (localStorage.peachflame2) {
    setAuthToken(localStorage.peachflame2);

    // decode token and get user info
    const decoded = jwtDecode(localStorage.peachflame2);

    // set user and isAuth
    store.dispatch(setCurrentUser(decoded));

    // check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login';
    }
}

// Alert Options
const opts = {
    timeout: 3000,
    position: 'bottom right'
};

const styles = {
    svg: {
        fill: '#fff',
        fontSize: 14,
        marginRight: 12,
        opacity: 0.9,
        width: 20,
        height: 20
        // lineHeight: 28.6
    },
    success: {
        backgroundColor: '#43a047',
        borderRadius: 4,
        boxShadow:
            '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        color: '#fff',
        fontSize: 14,
        letterSpacing: 0.14994,
        lineHeight: '20.02px',
        padding: '14px 16px',
        margin: 24,
        width: 300,
        maxWidth: '90%'
    },
    info: {
        backgroundColor: '#1976d2',
        borderRadius: 4,
        boxShadow:
            '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        color: '#fff',
        fontSize: 14,
        letterSpacing: 0.14994,
        lineHeight: '20.02px',
        padding: '14px 16px',
        margin: 24,
        width: 300,
        maxWidth: '90%'
    },

    error: {
        backgroundColor: '#d32f2f',
        borderRadius: 4,
        boxShadow:
            '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        color: '#fff',
        fontSize: 14,
        letterSpacing: 0.14994,
        lineHeight: '20.02px',
        padding: '14px 16px',
        margin: 24,
        width: 300,
        maxWidth: '90%'
    }
};

const AlertTemplate = ({ style, options, message, close }) => (
    <div>
        {options.type === 'success' && (
            <div style={styles.success}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <svg style={styles.svg} viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    {message}
                </span>
            </div>
        )}
        {options.type === 'info' && (
            <div style={styles.info}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <svg style={styles.svg} viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                    {message}
                </span>
            </div>
        )}
        {options.type === 'error' && (
            <div style={styles.error}>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <svg style={styles.svg} viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                    {message}
                </span>
            </div>
        )}
    </div>
);

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <AlertProvider template={AlertTemplate} {...opts}>
                        <Router>
                            <Alerts />
                            <div className="application">
                                <Appbar />

                                <Route exact path="/" component={Landing} />
                                <Route exact path="/login" component={Login} />
                                <Route
                                    exact
                                    path="/services"
                                    component={Services}
                                />
                                <Route
                                    exact
                                    path="/editor"
                                    component={Editor}
                                />
                                <Route exact path="/quote" component={Quote} />

                                <Switch>
                                    <PrivateRoute
                                        exact
                                        path="/dashboard"
                                        component={Dashboard}
                                    />
                                    <PrivateRoute
                                        exact
                                        path="/dashboard/create"
                                        component={CreateProject}
                                    />
                                    <PrivateRoute
                                        exact
                                        path="/dashboard/update/:id"
                                        component={EditProject}
                                    />
                                    <PrivateRoute
                                        exact
                                        path="/dashboard/account"
                                        component={Account}
                                    />
                                </Switch>

                                <Footer />
                            </div>
                        </Router>
                    </AlertProvider>
                </Provider>
            </div>
        );
    }
}

export default withRouter(App);
