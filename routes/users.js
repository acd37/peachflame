const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("dotenv").config();
const keys = require("../config/keys");
const User = require("../models/User");

//@route GET api/users/test
router.get("/test", (req, res) => res.json({ msg: "User route works" }));

//@route GET api/users/current/
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email,
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      isAdmin: req.user.isAdmin
    });
  }
);

//@route GET api/users/get/
router.get("/get", (req, res) => {
  User.find({}).then(clients => {
    if (!clients) {
      return res.status(400).json({ msg: "There are no clients!" });
    } else {
      res.json(clients);
      console.log(clients);
    }
  });
});

//CREATE POST api/users/register
router.post("/register", (req, res) => {
  console.log(req.body);
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists." });
    } else {
      if (req.body.password) {
        const newUser = new User({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          client_type: req.body.client_type,
          password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user =>
                res.json({
                  success: "User has been successfully registered.",
                  first_name: user.first_name,
                  last_name: user.last_name,
                  email: user.email,
                  id: user._id,
                  activeProjects: user.activeProjects
                })
              )
              .catch(err => console.log(err));
          });
        });
      } else {
        const newUser = new User({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          client_type: req.body.client_type
        });
        newUser
          .save()
          .then(user =>
            res.json({
              success: "User has been successfully registered.",
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              _id: user._id,
              client_type: user.client_type,
              activeProjects: user.activeProjects
            })
          )
          .catch(err => console.log(err));
      }
    }
  });
});

//READ GET api/users/:id
router.get("/:id", (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(user => {
      res.json({
        isAdmin: user.isAdmin,
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
      });
    })
    .catch(err => console.log(err));
});

//UPDATE PUT api/users/:id
router.put("/:id", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        client_type: req.body.client_type
      }
    },
    { new: true }
  )
    .then(user => {
      res.json({
        isAdmin: user.isAdmin,
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        client_type: user.client_type,
        activeProjects: user.activeProjects,
        success: "Client has been successfully updated."
      });
    })
    .catch(err => console.log(err));
});

//DELETE DELETE api/users/:id
router.delete("/:id", (req, res) => {
  User.findOneAndDelete({ _id: req.params.id }).then(response => {
    res.json({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      isAdmin: req.body.isAdmin,
      success: "User has been successfully deleted."
    });
  });
});

//LOGIN POST api/users/login
router.post("/login", (req, res) => {
  const password = req.body.password;

  User.findOne({
    email: req.body.email
  }).then(user => {
    if (!user) {
      return res.status(404).json({ email: "User not found." });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          isAdmin: user.isAdmin
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            const user = { ...payload, token: `Bearer ${token}` };

            res.json({
              user
            });
          }
        );
      } else {
        return res.status(404).json({ password: "Login attempt failed." });
      }
    });
  });
});

module.exports = router;
