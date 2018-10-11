const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const chalk = require("chalk");
const users = require("./routes/users");
const projects = require("./routes/projects");
const email = require("./routes/email");
const PORT = process.env.PORT || 8080;
const app = express();

require("dotenv").config();

// DB config
const db = require("./config/keys").mongoURI;

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// morgan logging
app.use(morgan("tiny"));

// Passport middleware/config
app.use(passport.initialize());
require("./config/passport")(passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log(`${chalk.green.bold("MongoDB Connected.")}`))
  .catch(err => console.log(err));

// api routes
app.use("/api/users", users);
app.use("/api/projects", projects);
app.use("/api/email", email);

//starting app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${chalk.green.bold(PORT)}!`);
});
