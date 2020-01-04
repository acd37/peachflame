import React, { Component } from "react";
import Banner from "../components/common/Banner";
import { updateProject, getProject } from "../actions/projectActions";
import { createMessage } from "../actions/messageActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import CustomButton from "../components/common/CustomButton";
import CustomInput from "../components/common/CustomInput";
import InputLabel from "../components/common/InputLabel";
import BackButton from "../components/common/BackButton";
import moment from "moment";

const styles = {
  container: {
    padding: 30,
    margin: "0 auto",
    width: 960,
    maxWidth: "90%"
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  }
};

class EditProject extends Component {
  state = {
    client: "",
    project_type: "",
    title: "",
    author: "",
    deadline: "",
    date: "",
    is_completed: false,
    payment_status: "",
    status: ""
  };

  componentDidMount() {
    this.props.getProject(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.project) {
      this.setState({
        id: nextProps.project._id,
        client: nextProps.project.client,
        project_type: nextProps.project.project_type,
        title: nextProps.project.title,
        author: nextProps.project.author,
        word_count: nextProps.project.word_count,
        project_fee: nextProps.project.project_fee,
        deadline: nextProps.project.deadline,
        sow_number: nextProps.project.sow_number,
        billed_month: nextProps.project.billed_month,
        billed_year: nextProps.project.billed_year,
        date: nextProps.project.date,
        invoice_number: nextProps.project.invoice_number,
        is_completed: nextProps.project.is_completed,
        payment_status: nextProps.project.payment_status,
        status: nextProps.project.status,
        hours: nextProps.project.hours
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSaveProject = e => {
    e.preventDefault();

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
        author: "You must specify a author."
      });
    }

    if (!this.state.deadline) {
      return this.props.createMessage({
        deadline: "You must specify a deadline"
      });
    }

    const updatedProject = {
      id: this.state.id,
      client: this.state.client,
      project_type: this.state.project_type,
      title: this.state.title,
      author: this.state.author,
      word_count: this.state.word_count,
      project_fee: this.state.project_fee,
      deadline: this.state.deadline,
      sow_number: this.state.sow_number,
      billed_month: this.state.billed_month,
      billed_year: this.state.billed_year,
      date: this.state.date,
      invoice_number: this.state.invoice_number,
      is_completed: this.state.is_completed,
      payment_status: this.state.payment_status,
      status: this.state.status,
      hours: this.state.hours,
      completed: this.state.is_completed
    };

    this.props.updateProject(updatedProject);
  };

  render() {
    return (
      <div>
        <Banner title="Update Project" />

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
                <select
                  style={{ fontSize: "0.9rem", color: "rgba(0,0,0,0.8)" }}
                  value={this.state.project_type && this.state.project_type}
                  onChange={this.onChange}
                  name="project_type"
                  className="select-css"
                >
                  <option value="Copy Edit">Copy Edit</option>
                  <option value="Proofread">Proofread</option>
                  <option value="Comprehensive Edit">Comprehensive Edit</option>
                  <option value="Critique">Critique</option>
                  <option value="Other">Other</option>
                </select>
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
                <InputLabel htmlFor="project_fee" text="* Project fee" />
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
                <CustomInput
                  type="text"
                  name="deadline"
                  value={moment(this.state.deadline).format("MM-DD-YY")}
                  onChange={this.onChange}
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

            <div style={styles.inputContainer}>
              <div>
                <InputLabel htmlFor="billed_month" text="Billed month" />

                <select
                  style={{ fontSize: "0.9rem", color: "rgba(0,0,0,0.8)" }}
                  value={this.state.billed_month && this.state.billed_month}
                  onChange={this.onChange}
                  name="billed_month"
                  className="select-css"
                >
                  <option></option>
                  <option value="1">1 - Jan</option>
                  <option value="2">2 - Feb</option>
                  <option value="3">3 - Mar</option>
                  <option value="4">4 - Apr</option>
                  <option value="5">5 - May</option>
                  <option value="6">6 - Jun</option>
                  <option value="7">7 - Jul</option>
                  <option value="8">8 - Aug</option>
                  <option value="9">9 - Sep</option>
                  <option value="10">10 - Oct</option>
                  <option value="11">11 - Nov</option>
                  <option value="12">12 - Dec</option>
                </select>
              </div>
              <div>
                <InputLabel htmlFor="hours" text="Hours" />
                <CustomInput
                  type="number"
                  name="hours"
                  value={this.state.hours}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div style={styles.inputContainer}>
              <div>
                <InputLabel htmlFor="invoice_number" text="Invoice number" />
                <CustomInput
                  type="number"
                  name="invoice_number"
                  value={this.state.invoice_number}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <InputLabel htmlFor="payment_status" text="Payment status" />
                <select
                  style={{ fontSize: "0.9rem", color: "rgba(0,0,0,0.8)" }}
                  value={this.state.payment_status && this.state.payment_status}
                  onChange={this.onChange}
                  name="payment_status"
                  className="select-css"
                >
                  <option value="pending">Pending</option>
                  <option value="invoiced">Invoiced</option>
                  <option value="paid">Paid</option>
                </select>
              </div>
            </div>

            <div style={styles.inputContainer}>
              <div>
                <InputLabel htmlFor="status" text="Status" />
                <select
                  style={{ fontSize: "0.9rem", color: "rgba(0,0,0,0.8)" }}
                  value={this.state.status && this.state.status}
                  onChange={this.onChange}
                  name="status"
                  className="select-css"
                >
                  <option value="queued">Queued</option>
                  <option value="pending">Pending</option>
                  <option value="delivered">Delivered</option>
                </select>
              </div>
              <div>
                <InputLabel htmlFor="is_completed" text="Completed" />
                <select
                  style={{ fontSize: "0.9rem", color: "rgba(0,0,0,0.8)" }}
                  value={this.state.is_completed && this.state.is_completed}
                  onChange={this.onChange}
                  name="is_completed"
                  className="select-css"
                >
                  <option value="true">Complete</option>
                  <option value="false">Incomplete</option>
                </select>
              </div>
            </div>

            <CustomButton type="submit" text="Update" />
          </form>
        </div>
      </div>
    );
  }
}

EditProject.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  project: state.projects.project
});

export default connect(mapStateToProps, {
  updateProject,
  getProject,
  createMessage
})(withRouter(EditProject));
