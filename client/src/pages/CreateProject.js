import React, { Component } from "react";
import { createProject } from "../actions/projectActions";
import { createMessage } from "../actions/messageActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import Banner from "../components/common/Banner";
import CustomButton from "../components/common/CustomButton";
import CustomInput from "../components/common/CustomInput";
import InputLabel from "../components/common/InputLabel";
import BackButton from "../components/common/BackButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const styles = {
  container: {
    margin: "0 auto 100px auto",
    width: 960,
    maxWidth: "90%"
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  }
};

class CreateProject extends Component {
  state = {
    client: "",
    project_type: "",
    title: "",
    author: "",
    deadline: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDeadlineChange = date => {
    this.setState({
      deadline: date
    });
  };

  handleSaveProject = e => {
    e.preventDefault();

    // save validations
    if (!this.state.client) {
      return this.props.createMessage({
        client: "You must specify a client."
      });
    }

    if (!this.state.project_type) {
      return this.props.createMessage({
        project_type: "You must specify a project type."
      });
    }

    if (!this.state.title) {
      return this.props.createMessage({
        title: "You must specify a title."
      });
    }

    if (!this.state.author) {
      return this.props.createMessage({
        author: "You must specify an author."
      });
    }

    console.log("here");
    if (!this.state.deadline) {
      return this.props.createMessage({
        deadline: "You must specify a deadline"
      });
    }

    // create and save project
    const newProject = {
      client: this.state.client,
      project_type: this.state.project_type,
      title: this.state.title,
      author: this.state.author,
      word_count: this.state.word_count,
      project_fee: this.state.project_fee,
      deadline: this.state.deadline,
      sow_number: this.state.sow_number
    };

    console.log(newProject);

    this.props.createProject(newProject);
  };

  render() {
    return (
      <div>
        <Banner title="Add Project" />

        <div style={styles.container}>
          <BackButton link="/dashboard" label="Back to Dashboard" />
          <form onSubmit={this.handleSaveProject}>
            <div style={styles.inputContainer}>
              <div>
                <InputLabel htmlFor="client" text="* Client name" />
                <CustomInput
                  type="text"
                  name="client"
                  value={this.state.client}
                  onChange={this.onChange}
                />
              </div>

              <div>
                <InputLabel htmlFor="project_type" text="* Project type" />
                <div style={styles.customInput}>
                  <select
                    style={{ fontSize: "0.9rem", color: "rgba(0,0,0,0.8)" }}
                    value={this.state.project_type}
                    onChange={this.onChange}
                    name="project_type"
                    className="select-css"
                  >
                    <option></option>
                    <option value="Copy Edit">Copy Edit</option>
                    <option value="Proofread">Proofread</option>
                    <option value="Comprehensive Edit">
                      Comprehensive Edit
                    </option>
                    <option value="Critique">Critique</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div style={styles.inputContainer}>
              <div>
                <InputLabel htmlFor="title" text="* Project title" />
                <CustomInput
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <InputLabel htmlFor="author" text="* Author name" />
                <CustomInput
                  type="text"
                  name="author"
                  value={this.state.author}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div style={styles.inputContainer}>
              <div>
                <InputLabel htmlFor="word_count" text="Word count" />
                <CustomInput
                  type="number"
                  name="word_count"
                  value={this.state.word_count}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <InputLabel htmlFor="project_fee" text="Project fee" />
                <CustomInput
                  type="number"
                  name="project_fee"
                  value={this.state.project_fee}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div style={styles.inputContainer}>
              <div>
                <InputLabel htmlFor="deadline" text="* Deadline" />
                <DatePicker
                  placeholderText="Click to select a date"
                  className="select-css-date"
                  selected={this.state.deadline}
                  onChange={this.handleDeadlineChange}
                  type="number"
                />
              </div>
              <div>
                <InputLabel htmlFor="sow_number" text="SoW number" />
                <CustomInput
                  type="number"
                  name="sow_number"
                  value={this.state.sow_number}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <CustomButton type="submit" text="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

CreateProject.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  createProject: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { createProject, createMessage })(
  withRouter(CreateProject)
);
