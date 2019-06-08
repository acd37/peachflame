import axios from 'axios';

import {
    SET_PROJECTS,
    CREATE_PROJECT,
    DELETE_PROJECT,
    LOADING,
    GET_ERRORS,
    CLEAR_ERRORS,
    UPDATE_PROJECT,
    SET_PROJECT,
    SET_PROJECT_DATA
} from './types';

export const updateProject = (projectData) => dispatch => {
    dispatch(clearErrors());

    axios
        .post(`/api/projects/update/${projectData.id}`, projectData)
        .then(res =>
            dispatch({
                type: UPDATE_PROJECT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const getProject = (projectId) => dispatch => {
    axios
        .get(`/api/projects/project/${projectId}`)
        .then(res =>
            dispatch({
                type: SET_PROJECT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: SET_PROJECT,
                payload: {}
            })
        );
}

export const getProjectData = () => dispatch => {
    axios
        .get(`/api/projects/data/`)
        .then(res =>
            dispatch({
                type: SET_PROJECT_DATA,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: SET_PROJECT_DATA,
                payload: {}
            })
        );
}

// get current profile
export const getUserProjects = () => dispatch => {
    dispatch(setLoading());

    axios
        .get('/api/projects')
        .then(res => {
            let projects = res.data;

            projects.sort(function (a, b) {
                var deadlineA = a.deadline.toLowerCase();
                var deadlineB = b.deadline.toLowerCase();

                if (deadlineA < deadlineB) return 1;
                if (deadlineA > deadlineB) return -1;
                return 0;
            });


            dispatch({
                type: SET_PROJECTS,
                payload: projects
            })
        })
        .catch(err =>
            dispatch({
                type: SET_PROJECTS,
                payload: {}
            })
        );
};

// add post
export const createProject = projectData => dispatch => {
    dispatch(clearErrors());

    axios
        .post('/api/projects/create', projectData)
        .then(res =>
            dispatch({
                type: CREATE_PROJECT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// delete project
export const deleteProject = id => dispatch => {
    axios
        .delete(`/api/projects/project/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_PROJECT,
                payload: id
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};



// clear errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};



//  loading
export const setLoading = () => {
    return {
        type: LOADING
    };
};