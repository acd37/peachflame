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
import PrivateRoute from './components/common/PrivateRoute';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Editor from './pages/Editor';
import CreateProject from './pages/CreateProject';
import EditProject from './pages/EditProject';
import Quote from './pages/Quote';
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div className="application">
              <Appbar />

              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/editor" component={Editor} />
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
        </Provider>
      </div>
    );
  }

}

export default withRouter(App);