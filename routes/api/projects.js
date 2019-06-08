const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const moment = require('moment');

// Load user model
const Project = require('../../models/Project');

// @route   GET api/projects/test
// @desc    Tests the project route
// @access  Public
router.get('/test', (req, res) => {
    res.json({
        msg: 'Projects routes works'
    });
});

// @route   POST api/projects/create
// @desc    Create post
// @access  Private
router.post(
    '/create',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        const newProject = new Project({
            user: req.user.id,
            client: req.body.client,
            project_type: req.body.project_type,
            title: req.body.title,
            author: req.body.author,
            word_count: req.body.word_count,
            project_fee: req.body.project_fee,
            cents_per_word: req.body.cents_per_word,
            deadline: req.body.deadline,
            status: req.body.status,
            billed_month: req.body.billed_month,
            billed_year: req.body.billed_year,
            hours: req.body.hours,
            invoice_number: req.body.invoice_number,
            sow_number: req.body.sow_number,
        });

        newProject.save().then(project => res.json(project));
    }
);

// @route   POST api/projects/update/:id
// @desc    Create post
// @access  Private
router.post(
    '/update/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        console.log(req.params.id)
        Project.findById(req.params.id).then(project => {


            project.updateOne({
                user: req.user.id,
                client: req.body.client,
                project_type: req.body.project_type,
                title: req.body.title,
                author: req.body.author,
                word_count: req.body.word_count,
                project_fee: req.body.project_fee,
                cents_per_word: req.body.cents_per_word,
                deadline: req.body.deadline,
                status: req.body.status,
                payment_status: req.body.payment_status,
                billed_month: req.body.billed_month,
                billed_year: req.body.billed_year,
                hours: req.body.hours,
                invoice_number: req.body.invoice_number,
                sow_number: req.body.sow_number,
            })
                .then(() => Project.find())
                .then(projects => {
                    res.json(projects);
                })
                .catch(err => console.log(err));
        })

    }
);

// @route   GET api/projects
// @desc    Get projects by logged in user
// @access  Private
router.get('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Project.find({
            user: req.user.id
        })
            .sort({ date: -1 })
            .then(projects => res.json(projects))
            .catch(err => res.status(404).json({ noprojects: 'No projects found for this user.' }));
    });


// @route   GET api/projects/:id
// @desc    Get project by id
// @access  Private
router.get('/project/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Project.findById(req.params.id)
            .then(project => res.json(project))
            .catch(err => res.status(404).json({ noproject: 'No project found with that ID.' }));
    });


// @route   DELETE api/projects/:id
// @desc    Delete project by id
// @access  Private
router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Project.findOne({ user: req.user.id }).then(profile => {
            Project.findById(req.params.id)
                .then(project => {
                    // check for project owner
                    if (project.user.toString() !== req.user.id) {
                        return res.status(401).json({
                            notauthorized:
                                'User not authorized to delete this project.'
                        });
                    }

                    // else delete
                    project.remove().then(() => res.json({ success: true, projectdeleted: "Project was successfully removed." }));
                })
                .catch(err =>
                    res.status(404).json({ projectnotfound: 'No project found.' })
                );
        });
    }
);

// @route   GET api/projects/data
// @desc    Get project financial data
// @access  Private
router.get('/data',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        Project.find({
            user: req.user.id
        })
            .then(projects => {

                let data = {
                    "jan": 0,
                    "feb": 0,
                    "mar": 0,
                    "apr": 0,
                    "may": 0,
                    "jun": 0,
                    "jul": 0,
                    "aug": 0,
                    "sep": 0,
                    "oct": 0,
                    "nov": 0,
                    "dec": 0,
                };

                for (var i = 0; i < projects.length; i++) {
                    if ((moment(projects[i].deadline).year() == 2019) && (projects[i].status === "delivered")) {

                        switch (projects[i].billed_month) {
                            case "1":
                                data.jan += projects[i].project_fee;
                                console.log(data.jan)
                                break;
                            case "2":
                                data.feb += projects[i].project_fee;
                                console.log(data.feb)
                                break;
                            case "3":
                                data.mar += projects[i].project_fee;
                                console.log(data.mar)
                                break;
                            case "4":
                                data.apr += projects[i].project_fee;
                                console.log(data.apr)
                                break;
                            case "5":
                                data.may += projects[i].project_fee;
                                console.log(data.may)
                                break;
                            case "6":
                                data.jun += projects[i].project_fee;
                                console.log(data.jun)
                                break;
                            case "7":
                                data.jul += projects[i].project_fee;
                                console.log(data.jul)
                                break;
                            case "8":
                                data.aug += projects[i].project_fee;
                                console.log(data.aug)
                                break;
                            case "9":
                                data.sep += projects[i].project_fee;
                                console.log(data.sep)
                                break;
                            case "10":
                                data.oct += projects[i].project_fee;
                                console.log(data.oct)
                                break;
                            case "11":
                                data.nov += projects[i].project_fee;
                                console.log(data.nov)
                                break;
                            case "12":
                                data.dec += projects[i].project_fee;
                                console.log(data.dec)
                                break;
                        }

                    }
                }


                res.json(data)
            })
            .catch(err => {
                console.log(err)
                res.status(404).json({ noprojects: 'No projects found for this user.' })
            });
    });

module.exports = router;