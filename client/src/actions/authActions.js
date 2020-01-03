import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwtDecode from "jwt-decode";
import { returnErrors, createMessage } from "./messageActions";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  LOADING,
  LOGIN_FAIL,
  UPDATE_PASSWORD
} from "./types";

// Register
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => {
      history.push("/login");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // save token to localStorage
      const { token } = res.data;
      localStorage.setItem("peachflame2", token);

      // set token to auth header
      setAuthToken(token);

      // decode token to get user data
      const decoded = jwtDecode(token);

      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch(returnErrors(err.response));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// changes user password
export const updatePassword = data => dispatch => {
  axios
    .post("/api/users/password", data)
    .then(res => {
      dispatch({
        type: UPDATE_PASSWORD,
        payload: res.data.password
      });
      dispatch(createMessage(res.data.password));
    })
    .catch(err => {
      dispatch(returnErrors(err.response));
    });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// log user out
export const logoutUser = () => dispatch => {
  // remove token from localStorage
  localStorage.removeItem("peachflame2");

  // remove auth header
  setAuthToken(false);

  // set current user to {}
  dispatch(setCurrentUser({}));
};

//  loading
export const setLoading = () => {
  return {
    type: LOADING
  };
};
