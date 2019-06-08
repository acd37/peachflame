const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load input validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const validatePasswordInput = require('../../validation/password');

// Load user model
const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests the users route
// @access  Public
router.get('/test', (req, res) => {
    res.json({
        msg: 'Users routes works'
    });
});


// @route   POST api/users/register
// @desc    Register the user
// @access  Public
router.post('/register',
    (req, res) => {
        const { errors, isValid } = validateRegisterInput(req.body);

        // check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }

        User.findOne({
            email: req.body.email
        }).then(user => {
            if (user) {
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else {

                const newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password,
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
    });

// @route   POST api/users/password
// @desc    Updates the users password
// @access  Public
router.post('/password',
    passport.authenticate('jwt', { session: false }), (req, res) => {
        const { errors, isValid } = validatePasswordInput(req.body);

        // check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }

        User.findOne({
            email: req.user.email
        }).then(user => {

            user.password = req.body.password;


            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(user.password, salt, (err, hash) => {
                    if (err) throw err;
                    user.password = hash;
                    user
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        })
    });



// @route   POST api/users/login
// @desc    Login the user // return the JWT
// @access  Public
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    // check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then(user => {
        // Check the user exists
        if (!user) {
            errors.email = 'User not found';
            return res.status(404).json(errors);
        }

        // Check the password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // create the payload
                const payload = {
                    id: user.id,
                    name: user.name,
                };

                // sign the token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 3600 * 12
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: `Bearer ${token}`
                        });
                    }
                );
            } else {
                errors.password = 'User password could not be validated.';
                return res.status(400).json(errors);
            }
        });
    });
});



// @route   GET api/users/current
// @desc    Return the current user
// @access  Private
router.get(
    '/current',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        res.json({
            id: req.user.id,
            name: req.user.name,
            email: req.user.email
        });
    }
);







module.exports = router;