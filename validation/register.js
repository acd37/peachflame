const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
    data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    if (!validator.isLength(data.firstName, { min: 2, max: 30 })) {
        errors.firstName = 'First name must be between 2 and 30 characters.';
    }

    if (validator.isEmpty(data.firstName)) {
        errors.firstName = 'First name field is required.';
    }

    if (!validator.isLength(data.lastName, { min: 2, max: 30 })) {
        errors.lastName = 'Last name must be between 2 and 30 characters.';
    }

    if (validator.isEmpty(data.lastName)) {
        errors.lastName = 'Last  name field is required.';
    }

    if (validator.isEmpty(data.email)) {
        errors.email = 'Email field is required.';
    }

    if (!validator.isEmail(data.email)) {
        errors.email = 'Email is invalid.';
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