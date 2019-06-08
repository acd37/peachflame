import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER, LOADING, UPDATE_PASSWORD } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case UPDATE_PASSWORD:
            return {
                ...state,
                passwordChanged: action.payload
            }
        default:
            return state;
    }
}