const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String
  },
  project_type: {
    type: String
  },
  page_count: {
    type: String
  },
  word_count: {
    type: String
  },
  genre: {
    type: String
  },
  due_date: {
    type: Date
  },
  project_type: {
    type: String
  },
  quoted_amount: {
    type: String
  },
  quote_received: {
    type: Date
  },
  date_agreed: {
    type: Date
  },
  status: {
    type: String
  },
  completion_date: {
    type: String
  },
  project_manager: {
    type: String
  }
});

module.exports = Project = mongoose.model("projects", ProjectSchema);
