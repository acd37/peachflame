import React, { Component, Fragment } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import green from "@material-ui/core/colors/green";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ClientsConsumer } from "../Clients.context";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Typography,
  FormGroup,
  Checkbox,
  Button
} from "@material-ui/core";

const styles = {
  container: {
    marginTop: 30,
    marginBottom: 30,
    padding: 30,
    maxWidth: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: 600
  },
  formControl: {
    marginTop: 30,
    marginBottom: 30
  },
  buttonLoading: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
};

class Quote extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    service: "",
    editorial: "",
    development: "",
    content: "",
    details: "",
    pages: "",
    checkedGoogle: false,
    checkedSocial: false,
    checkedSEO: false,
    checkedDatabase: false,
    checkedShoppingCart: false,
    formComplete: false,
    loading: false,
    success: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleRadioChange = event => {
    this.setState({ service: event.target.value });
  };

  handleEditorialRadioChange = event => {
    this.setState({ editorial: event.target.value });
  };

  handleDevelopmentRadioChange = event => {
    this.setState({ development: event.target.value });
  };

  handleContentRadioChange = event => {
    this.setState({ content: event.target.value });
  };

  handleChecked = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleFormSubmit = dispatch => {
    let emailData = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      service: this.state.service,
      pages: this.state.pages,
      google_analytics: this.state.checkedGoogle
        ? "Google Analytics: yes"
        : "Google Analytics: no",
      social_media: this.state.checkedSocial
        ? "Social Media: yes"
        : "Social Media: no",
      seo: this.state.checkedSEO ? "SEO: yes" : "SEO: no",
      database: this.state.checkedDatabase ? "Database: yes" : "Database: no",
      shopping_cart: this.state.checkedShoppingCart
        ? "Shopping Cart: yes"
        : "Shopping Cart: no",
      details: this.state.details
    };

    this.setState({
      loading: true
    });

    axios.post("/api/email/send", emailData).then(res => {
      this.setState({
        first_name: "",
        last_name: "",
        email: "",
        service: "",
        pages: "",
        google_analytics: "",
        social_media: "",
        seo: "",
        database: "",
        shopping_cart: "",
        details: "",
        loading: false
      });
      dispatch({
        type: "DISPLAY_ALERT",
        payload: res.data
      });
    });
  };

  render() {
    return (
      <ClientsConsumer>
        {value => {
          const { dispatch } = value.state;

          return (
            <Fragment>
              <Banner title="Quote" />

              <div style={styles.container}>
                <form style={styles.form}>
                  <TextField
                    label="First name"
                    value={this.state.first_name}
                    onChange={this.handleChange("first_name")}
                    fullWidth
                    required
                  />
                  <TextField
                    label="Last name"
                    value={this.state.last_name}
                    onChange={this.handleChange("last_name")}
                    fullWidth
                    required
                  />
                  <TextField
                    label="Email"
                    value={this.state.email}
                    onChange={this.handleChange("email")}
                    fullWidth
                    required
                  />

                  <FormControl component="fieldset" style={styles.formControl}>
                    <FormLabel component="legend">Service type: </FormLabel>
                    <RadioGroup
                      aria-label="service"
                      name="service"
                      value={this.state.service}
                      onChange={this.handleRadioChange}
                    >
                      <FormControlLabel
                        value="editorial"
                        control={<Radio color="primary" />}
                        label="Editorial"
                      />
                      <FormControlLabel
                        value="development"
                        control={<Radio color="primary" />}
                        label="Development"
                      />
                    </RadioGroup>
                  </FormControl>

                  {this.state.service === "editorial" && (
                    <Fragment>
                      <Typography variant="headline">Editorial</Typography>

                      <FormControl
                        component="fieldset"
                        style={styles.formControl}
                      >
                        <FormLabel component="legend">Service type: </FormLabel>
                        <RadioGroup
                          aria-label="editorial"
                          name="editorial"
                          value={this.state.editorial}
                          onChange={this.handleEditorialRadioChange}
                        >
                          <FormControlLabel
                            value="reader"
                            control={<Radio color="primary" />}
                            label="Reader Report"
                          />
                          <FormControlLabel
                            value="developmental"
                            control={<Radio color="primary" />}
                            label="Developmental Edit"
                          />
                          <FormControlLabel
                            value="line"
                            control={<Radio color="primary" />}
                            label="Line Edit"
                          />
                          <FormControlLabel
                            value="copy"
                            control={<Radio color="primary" />}
                            label="Copy Edit & Proofread"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Fragment>
                  )}

                  {this.state.service === "development" && (
                    <Fragment>
                      <TextField
                        label="Estimated number of pages"
                        value={this.state.pages}
                        onChange={this.handleChange("pages")}
                        required
                        fullWidth
                      />

                      <FormControl
                        component="fieldset"
                        style={styles.formControl}
                      >
                        <Typography variant="subheading">
                          Check any features you think you will need.
                        </Typography>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.checkedDatabase}
                                onChange={this.handleChecked("checkedDatabase")}
                                value="checkedDatabase"
                                color="primary"
                              />
                            }
                            label="Database"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.checkedSEO}
                                onChange={this.handleChecked("checkedSEO")}
                                value="checkedSEO"
                                color="primary"
                              />
                            }
                            label="Search engine optimization "
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.checkedShoppingCart}
                                onChange={this.handleChecked(
                                  "checkedShoppingCart"
                                )}
                                value="checkedShoppingCart"
                                color="primary"
                              />
                            }
                            label="Shopping Cart"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.checkedSocial}
                                onChange={this.handleChecked("checkedSocial")}
                                value="checkedSocial"
                                handleChecked
                                color="primary"
                              />
                            }
                            label="Social media integration"
                          />

                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.checkedGoogle}
                                onChange={this.handleChecked("checkedGoogle")}
                                value="checkedGoogle"
                                color="primary"
                              />
                            }
                            label="Google Analytics"
                          />
                        </FormGroup>
                      </FormControl>
                    </Fragment>
                  )}

                  {this.state.service === "content" && (
                    <Fragment>
                      <Typography variant="headline">
                        Content Creation
                      </Typography>
                    </Fragment>
                  )}

                  {this.state.service && (
                    <Fragment>
                      <TextField
                        label="Tell us a little more about your project."
                        value={this.state.details}
                        onChange={this.handleChange("details")}
                        multiline
                        rows="5"
                        fullWidth
                      />
                      <FormControl
                        component="fieldset"
                        style={styles.formControl}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={this.state.loading}
                          onClick={this.handleFormSubmit.bind(this, dispatch)}
                        >
                          {this.state.loading && (
                            <CircularProgress
                              style={styles.buttonLoading}
                              size={24}
                            />
                          )}
                          Submit
                        </Button>
                      </FormControl>
                    </Fragment>
                  )}
                </form>
              </div>
            </Fragment>
          );
        }}
      </ClientsConsumer>
    );
  }
}

export default Quote;
