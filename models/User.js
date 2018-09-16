const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  activeProjects: {
    type: Array,
    default: []
  },
  client_type: {
    type: String
  },
  project: {
    title: String,
    project_type: String,
    page_count: String,
    word_count: String,
    genre: String,
    due_date: Date,
    project_type: String,
    quoted_amount: String,
    quote_received: Date,
    date_agreed: Date,
    status: String,
    completion_date: String,
    project_manager: String
  }
});

module.exports = User = mongoose.model("users", UserSchema);
