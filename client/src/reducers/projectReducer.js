import {
    SET_PROJECTS,
    CREATE_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    SET_PROJECT,
    LOADING
} from '../actions/types';

const initialState = {
    projects: [],
    project: {},
    loading: false
};



export default function (state = initialState, action) {
    switch (action.type) {
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(project => project._id !== action.payload)
            };
        case CREATE_PROJECT:
            return {
                ...state,
                projects: [action.payload, ...state.projects]
            };
        case UPDATE_PROJECT:
            return {
                ...state,
                projects: [action.payload, ...state.projects]
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                loading: false
            };
        case SET_PROJECT:
            return {
                ...state,
                project: action.payload,
                loading: false
            };
        default:
            return state;
    }
}