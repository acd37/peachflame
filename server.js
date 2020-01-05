const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const chalk = require("chalk");
const compression = require("compression");
const { morganConfig } = require("./config/morganConfig");

const users = require("./routes/api/users");
const projects = require("./routes/api/projects");
const email = require("./routes/api/email");

const port = process.env.PORT || 5000;
const app = express();

// compression
app.use(compression());

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// morgan logging
app.use(morganConfig);

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected."))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/projects", projects);
app.use("/api/email", email);

// server static assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () =>
  console.log(`Server running on port ${chalk.green.bold(port)}!`)
);
