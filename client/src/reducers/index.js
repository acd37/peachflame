import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    auth: authReducer,
    projects: projectReducer,
    errors: errorReducer
});
