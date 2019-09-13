import React, { Component, Fragment } from 'react';
import { Button } from '@material-ui/core';
import Banner from '../components/Banner';
import { createProject } from '../actions/projectActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const styles = {
    container: {
        padding: 30,
        margin: '0 auto',
        width: 960,
        maxWidth: '90%'
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    customInput: {
        border: 'none',
        marginTop: 20,
        padding: 20,
        boxShadow: '0 12px 15px rgba(0,0,0,0.1), 0 17px 50px rgba(0,0,0,0.1)',
        borderRadius: '.375rem',
        width: 400
    },
    customInputLabel: {
        display: 'block',
        marginTop: 20,
        marginBottom: -15,
        fontSize: '0.7rem',
        color: '#999'
    },
    linkButton: {
        color: "#fff",
        textDecoration: 'none'
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

class CreateProject extends Component {
    state = {
        client: '',
        project_type: '',
        title: '',
        author: '',
        word_count: '',
        project_fee: '',
        deadline: '',
        sow_number: ''
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleChange = () => {
        this.setState(state => ({ checked: !state.checked }));
    };

    handleDeadlineChange = (date) => {
        this.setState({
            deadline: date
        });
    }

    handleSaveProject = e => {
        e.preventDefault();

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

        this.props.createProject(newProject);

        this.setState({
            client: "",
            project_type: "",
            title: "",
            author: "",
            word_count: "",
            project_fee: "",
            deadline: "",
            sow_number: ""
        })
    };

    render() {

        return (
            <Fragment>
                <Banner title="Add Project" />

                <div style={styles.container}>
                    <Button style={styles.button}>
                        <Link style={styles.linkButton} to="/dashboard">Back to Dashboard</Link>
                    </Button>
                    <form onSubmit={this.handleSaveProject}>

                        <div style={styles.inputContainer}>
                            <div>
                                <label htmlFor="client" style={styles.customInputLabel}>Client name</label>
                                <input
                                    style={styles.customInput}
                                    placeholder="Client name"
                                    name="client"
                                    value={this.state.client}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div>

                                <label htmlFor="project_type" style={styles.customInputLabel}>Project type</label>

                                <input
                                    style={styles.customInput}
                                    placeholder="Project type"
                                    name="project_type"
                                    value={this.state.project_type}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>

                        <div style={styles.inputContainer}>
                            <div>

                                <label htmlFor="title" style={styles.customInputLabel}>Project title</label>

                                <input
                                    style={styles.customInput}
                                    placeholder="Project title"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div>

                                <label htmlFor="author" style={styles.customInputLabel}>Author name</label>

                                <input
                                    style={styles.customInput}
                                    placeholder="Author name"
                                    name="author"
                                    value={this.state.author}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>

                        <div style={styles.inputContainer}>
                            <div>

                                <label htmlFor="word_count" style={styles.customInputLabel}>Word count</label>

                                <input
                                    style={styles.customInput}
                                    placeholder="Word count"
                                    name="word_count"
                                    value={this.state.word_count}
                                    onChange={this.onChange}
                                />
                            </div><div>

                                <label htmlFor="project_fee" style={styles.customInputLabel}>Project fee</label>

                                <input
                                    style={styles.customInput}
                                    placeholder="Project fee"
                                    name="project_fee"
                                    value={this.state.project_fee}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>

                        <div style={styles.inputContainer}>

                            <div>

                                <label htmlFor="deadline" style={styles.customInputLabel}>Deadline</label>
                                <DatePicker
                                    placeholderText="Click to select a date"
                                    className="select-css-date"
                                    selected={this.state.deadline}
                                    onChange={this.handleDeadlineChange}
                                />

                            </div>
                            <div>

                                <label htmlFor="sow_number" style={styles.customInputLabel}>SoW number</label>

                                <input
                                    style={styles.customInput}
                                    placeholder="SoW number"
                                    name="sow_number"
                                    value={this.state.sow_number}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            style={styles.button}
                        >
                            Add Project
                        </Button>
                    </form>
                </div>
            </Fragment>
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

export default connect(
    mapStateToProps,
    { createProject }
)(withRouter(CreateProject));