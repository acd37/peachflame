import {
    SET_PROJECTS,
    CREATE_PROJECT,
    UPDATE_PROJECT,
    DELETE_PROJECT,
    SET_PROJECT,
    LOADING,
    SET_PROJECT_DATA
} from '../actions/types';

const initialState = {
    projects: [],
    project: {},
    projectData: {},
    loading: false
};



export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PROJECT_DATA: {
            return {
                ...state,
                projectData: action.payload
            }
        }
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
                project: action.payload,
                loading: false
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