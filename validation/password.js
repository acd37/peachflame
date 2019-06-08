const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};


    data.currentPass = !isEmpty(data.currentPass) ? data.currentPass : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';


    if (validator.isEmpty(data.currentPass)) {
        errors.currentPass = 'Current password field is required.';
    }

    if (validator.isEmpty(data.password)) {
        errors.password = 'Password field is required.';
    }

    if (!validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be between 6 and 30 characters.';
    }

    if (validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm password field is required.';
    }

    if (!validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match.';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};