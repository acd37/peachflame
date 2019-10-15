import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import errorReducer from './errorReducer';
import messageReducer from './messageReducer';

export default combineReducers({
    auth: authReducer,
    projects: projectReducer,
    errors: errorReducer,
    messages: messageReducer
});
