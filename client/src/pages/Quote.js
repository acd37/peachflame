import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Banner from '../components/Banner';
import green from '@material-ui/core/colors/green';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    TextField,
    FormControl,
    FormControlLabel,
    Typography,
    FormGroup,
    Checkbox,
    Button
} from '@material-ui/core';

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 960,
        margin: '0 auto',
        maxWidth: '90%'
    },
    formControl: {
        marginTop: 30,
        marginBottom: 30
    },
    buttonLoading: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    customInput: {
        border: 'none',
        marginTop: 20,
        marginRight: 20,
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
    button: {
        backgroundColor: "#fc7967",
        marginTop: 20,
        color: "#fff",
        fontWeight: 300,
        letterSpacing: 1.2,
        padding: "5px 30px"
    }
};

class Quote extends Component {
    state = {
        errors: {},
        messages: '',
        checkedDevelopmental: false,
        checkedCopy: false,
        checkedLine: false,
        formComplete: false,
        loading: false,
        success: false
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleCheckedBox = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleFormSubmit = () => {
        let emailData = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            wordCount: this.state.wordCount,
            developmental_edit: this.state.checkedDevelopmental
                ? 'Developmental Edit: yes'
                : 'Developmental Edit: no',
            copy_edit: this.state.checkedCopy ? 'Copy Edit: yes' : 'Copy Edit: no',
            line_edit: this.state.checkedLine ? 'Line Edit: yes' : 'Line Edit: no',
            details: this.state.details
        };

        this.setState({
            loading: true
        });

        axios
            .post('/api/email/send', emailData)
            .then(res => {
                console.log(res)
                this.setState({
                    messages: res.data.success,
                    firstName: '',
                    lastName: '',
                    email: '',
                    wordCount: '',
                    details: '',
                    checkedDevelopmental: false,
                    checkedLine: false,
                    checkedCopy: false,
                    formComplete: false,
                    loading: false
                });
            })
            .catch(err => {
                console.log('Error sending email: ', err)
            });
    };

    render() {
        return (
            <Fragment>
                <Banner title="Start a Quote" />

                <form style={styles.form}>
                    <div style={styles.inputContainer}>
                        <div>
                            <label htmlFor="firstName" style={styles.customInputLabel}>First Name</label>
                            <input
                                style={styles.customInput}
                                placeholder="First name"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange('firstName')}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" style={styles.customInputLabel}>Last Name</label>
                            <input
                                style={styles.customInput}
                                placeholder="Last name"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange('lastName')}
                            />
                        </div>
                    </div>
                    <div style={styles.inputContainer}>
                        <div>
                            <label htmlFor="email" style={styles.customInputLabel}>Email</label>
                            <input
                                style={styles.customInput}
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                            />
                        </div>
                        <div>
                            <label htmlFor="wordCount" style={styles.customInputLabel}>Word count</label>
                            <input
                                style={styles.customInput}
                                placeholder="Word count"
                                name="wordCount"
                                value={this.state.wordCount}
                                onChange={this.handleChange('wordCount')}
                            />
                        </div>
                    </div>



                    <Fragment>
                        <FormControl component="fieldset" style={styles.formControl}>
                            <Typography variant="subheading">
                                What kind of edit would you like? You may select more than one
                                if you require all stages of editing for your manuscript.
              </Typography>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.checkedDevelopmental}
                                            onChange={this.handleCheckedBox('checkedDevelopmental')}
                                            value="checkedDevelopmental"
                                            color="primary"
                                        />
                                    }
                                    label="Developmental Edit"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.checkedCopy}
                                            onChange={this.handleCheckedBox('checkedCopy')}
                                            value="checkedCopy"
                                            color="primary"
                                        />
                                    }
                                    label="Copy Edit"
                                />

                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={this.state.checkedLine}
                                            onChange={this.handleCheckedBox('checkedLine')}
                                            value="checkedLine"
                                            color="primary"
                                        />
                                    }
                                    label="Line Edit"
                                />
                            </FormGroup>
                        </FormControl>
                    </Fragment>


                    <Fragment>
                        <div style={styles.inputContainer}>
                            <div>
                                <label htmlFor="details" style={styles.customInputLabel}>Tell us a little more about your project.</label>
                                <textarea
                                    rows="8"
                                    style={styles.customInput}
                                    placeholder="Details"
                                    name="details"
                                    value={this.state.details}
                                    onChange={this.handleChange('details')}
                                />
                            </div>
                        </div>

                        <FormControl component="fieldset" style={styles.formControl}>
                            {
                                this.state.messages &&
                                <p className="success-message">{this.state.messages}</p>
                            }
                            <Button
                                style={styles.button}
                                disabled={this.state.loading}
                                onClick={this.handleFormSubmit.bind(this)}
                            >
                                {this.state.loading && (
                                    <CircularProgress style={styles.buttonLoading} size={24} />
                                )}
                                Submit
              </Button>
                        </FormControl>
                    </Fragment>
                </form>
            </Fragment>
        );
    }
}

export default Quote;