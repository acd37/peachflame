import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, LOADING, SET_PROJECTS } from './types';


// Register
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/api/users/register', userData)
        .then(res => {
            history.push('/login');
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
        .post('/api/users/login', userData)
        .then(res => {
            // save token to localStorage
            const { token } = res.data;
            localStorage.setItem('peachflame2', token);

            // set token to auth header
            setAuthToken(token);

            // decode token to get user data
            const decoded = jwtDecode(token);

            // set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
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
    localStorage.removeItem('peachflame2');

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