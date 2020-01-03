import React, { Component, Fragment } from "react";
import { Button } from "@material-ui/core";
import Banner from "../components/common/Banner";
import { updateProject, getProject } from "../actions/projectActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";
import { createMessage } from "../actions/messageActions";

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
  },
  customInput: {
    border: "none",
    marginTop: 20,
    padding: 20,
    boxShadow: "0 12px 15px rgba(0,0,0,0.1), 0 17px 50px rgba(0,0,0,0.1)",
    borderRadius: ".375rem",
    width: 400,
    fontWeight: 300,
    fontSize: "1rem"
  },
  customInputLabel: {
    display: "block",
    marginTop: 20,
    marginBottom: -15,
    fontSize: "0.7rem",
    color: "#999"
  },
  linkButton: {
    color: "#fff",
    textDecoration: "none"
  },
  button: {
    backgroundColor: "#fc7967",
    marginTop: 20,
    color: "#fff",
    fontWeight: 300,
    letterSpacing: 1.2,
    padding: "5px 30px"
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
    console.log(nextProps);
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
        hours: nextProps.project.hours,
        is_completed: nextProps.project.is_completed
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  handleSaveProject = e => {
    e.preventDefault();

    if (!this.state.client) {
      return this.props.createMessage({
        client: "You must specify a client."
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

    if (!this.state.project_type) {
      return this.props.createMessage({
        projectType: "You must specify a project type."
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
      <Fragment>
        <Banner title="Update Project" />

        <div style={styles.container}>
          <Button style={styles.button}>
            <Link style={styles.linkButton} to="/dashboard">
              Back to Dashboard
            </Link>
          </Button>
          <form onSubmit={this.handleSaveProject}>
            <div style={styles.inputContainer}>
              <div>
                <label htmlFor="client" style={styles.customInputLabel}>
                  * Client name
                </label>
                <input
                  style={styles.customInput}
                  name="client"
                  value={this.state.client}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <label htmlFor="project_type" style={styles.customInputLabel}>
                  * Project type
                </label>
                <input
                  style={styles.customInput}
                  name="project_type"
                  value={this.state.project_type}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div style={styles.inputContainer}>
              <div>
                <label htmlFor="title" style={styles.customInputLabel}>
                  * Project title
                </label>
                <input
                  style={styles.customInput}
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <label htmlFor="author" style={styles.customInputLabel}>
                  * Author name
                </label>
                <input
                  style={styles.customInput}
                  name="author"
                  value={this.state.author}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div style={styles.inputContainer}>
              <div>
                <label htmlFor="word_count" style={styles.customInputLabel}>
                  Word count
                </label>
                <input
                  type="number"
                  style={styles.customInput}
                  name="word_count"
                  value={this.state.word_count}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <label htmlFor="project_fee" style={styles.customInputLabel}>
                  Project fee
                </label>
                <input
                  type="number"
                  style={styles.customInput}
                  name="project_fee"
                  value={this.state.project_fee}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div style={styles.inputContainer}>
              <div>
                <label htmlFor="deadline" style={styles.customInputLabel}>
                  * Deadline
                </label>
                <input
                  style={styles.customInput}
                  name="deadline"
                  value={moment(this.state.deadline).format("MM-DD-YY")}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <label htmlFor="sow_number" style={styles.customInputLabel}>
                  SoW number
                </label>
                <input
                  style={styles.customInput}
                  name="sow_number"
                  value={this.state.sow_number}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div style={styles.inputContainer}>
              <div>
                <label htmlFor="billed_month" style={styles.customInputLabel}>
                  Billed month
                </label>

                <select
                  value={this.state.billed_month && this.state.billed_month}
                  onChange={this.onChange}
                  name="billed_month"
                  className="select-css"
                >
                  <option value="0"></option>
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
                <label htmlFor="hours" style={styles.customInputLabel}>
                  Hours
                </label>
                <input
                  type="number"
                  style={styles.customInput}
                  name="hours"
                  value={this.state.hours}
                  onChange={this.onChange}
                />
              </div>
            </div>

            <div style={styles.inputContainer}>
              <div>
                <label htmlFor="invoice_number" style={styles.customInputLabel}>
                  Invoice number
                </label>
                <input
                  style={styles.customInput}
                  name="invoice_number"
                  value={this.state.invoice_number}
                  onChange={this.onChange}
                />
              </div>
              <div>
                <label htmlFor="payment_status" style={styles.customInputLabel}>
                  Payment Status
                </label>
                <select
                  value={this.state.payment_status && this.state.payment_status}
                  onChange={this.onChange}
                  name="payment_status"
                  className="select-css"
                >
                  <option value="pending">pending</option>
                  <option value="invoiced">invoiced</option>
                  <option value="paid">paid</option>
                </select>
              </div>
            </div>

            <div style={styles.inputContainer}>
              <div>
                <label htmlFor="status" style={styles.customInputLabel}>
                  Status
                </label>
                <select
                  value={this.state.status && this.state.status}
                  onChange={this.onChange}
                  name="status"
                  className="select-css"
                >
                  <option value="queued">queued</option>
                  <option value="pending">pending</option>
                  <option value="delivered">delivered</option>
                </select>
              </div>
              <div>
                <label htmlFor="is_completed" style={styles.customInputLabel}>
                  Completed
                </label>
                <select
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

            <Button type="submit" style={styles.button}>
              Update
            </Button>
          </form>
        </div>
      </Fragment>
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
