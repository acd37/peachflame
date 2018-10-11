const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");

//@route GET api/email/test
router.get("/test", (req, res) => res.json({ msg: "Email route works" }));

// SEND MAIL POST api/email/send

router.post("/send", (req, res) => {
  let email = req.body;
  console.log(req.body);

  // Nodemailer config
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "help@peachflame.co",
      clientId:
        "578653408763-rd2efm6p1m3t4l1djv9e3n3g7r66o1rr.apps.googleusercontent.com",
      clientSecret: "Nlzx7DLR2s63lvW4mL2PLh-A",
      refreshToken:
        "1/CpuMwKEgWKKyUaSx6qqgv8G6iw33NqRd3QduStbCEZV3n_ISllAjebuP9VacMH03",
      accessToken:
        "ya29.GlszBiJFd7L_Ue6jAu7HZz_xCoZsPIT2sQ0qLDsj-nwPG9aSIxKSRs4-WidsTxNMR3rJYI8RIUJA-QTp4ub-5JxQUnrCMaG_rIqLA5wCAYkEW5tGYcYrFDmFsSAT"
    }
  });

  var mailOptions = {
    from: "New Quote | PeachFlame <" + req.body.email + ">",
    to: "help@peachflame.co",
    subject: "New Quote - PeachFlame",
    generateTextFromHTML: true,
    html:
      "<h3>You have received a new quote request</h3>" +
      "<p> Name: " +
      req.body.first_name +
      req.body.last_name +
      "</p>" +
      "<p> Email: " +
      req.body.email +
      "</p>" +
      "<p> Service Requested: " +
      req.body.service +
      "</p>" +
      "<p> Pages: " +
      req.body.pages +
      "</p>" +
      "<p> Other Items: " +
      req.body.social_media +
      "<br/>" +
      req.body.google_analytics +
      "<br/>" +
      req.body.seo +
      "<br/>" +
      req.body.database +
      "<br/>" +
      req.body.shopping_cart +
      "</p>" +
      "<p> Details: " +
      req.body.details +
      "</p>"
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.json("Sorry! Looks like we had an issue sending your quote.");
    } else {
      console.log("Email sent!");
      res.json("Your quote request has been received.");
    }
  });
});
module.exports = router;
