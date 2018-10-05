const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const uuidv4 = require("uuid/v4");

//@route GET api/projects/test
router.get("/test", (req, res) => res.json({ msg: "Project route works" }));

//CREATE POST api/projects/add
router.put("/add/:id", (req, res) => {
  console.log(req.body);

  const project = {
    id: uuidv4(),
    title: req.body.title,
    project_type: req.body.project_type,
    quoted_amount: req.body.quoted_amount,
    project_manager: req.body.project_manager
  };

  console.log(project);

  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: { activeProjects: project }
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
        success: "Project has been successfully added."
      });
    })
    .catch(err => console.log(err));
});

//PUT  api/projects/delete/:id
router.put("/delete/:user_id/:project_id", (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.user_id },
    {
      $pull: {
        activeProjects: {
          id: req.params.project_id
        }
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
        success: "Project has been successfully deleted."
      });
    })
    .catch(err => console.log(err));
});

//UPDATE PUT api/projects/update

module.exports = router;
