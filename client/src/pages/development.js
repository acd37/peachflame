import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";
import { Typography, Button, Grid, Paper, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    padding: 50,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 50
  },
  productOffering: {
    padding: 20,
    marginBottom: 30,
    width: "100%"
  },
  textHeader: {
    fontSize: "2em",
    color: "rgb(37,56,88)",
    marginBottom: 30
  },
  textSubHeader: {
    fontSize: "1.8em",
    fontWeight: "300",
    color: "rgb(37,56,88)"
  },
  textIntro: {
    fontSize: "1.5em",
    fontWeight: "300",
    color: "rgb(37,56,88)",
    marginBottom: 30
  },
  button: {
    marginTop: 20,
    marginBottom: 20
  },
  divider: {
    marginBottom: 20
  }
};

const QuoteLink = props => <Link to="/quote" {...props} />;

class Development extends Component {
  render() {
    return (
      <Fragment>
        <Banner title="Web & Software Development" />

        <Grid container justify="center">
          <Grid item xs={8}>
            <div style={styles.container}>
              <Typography style={styles.textHeader}>Services</Typography>

              <Typography style={styles.textIntro}>
                All development services include a 1:1 meeting with your project
                manager and, if applicable, additional software engineers.
              </Typography>

              <Paper style={styles.productOffering} elevation={8}>
                <Typography style={styles.textSubHeader}>
                  Template Web Developement
                </Typography>
                <Divider style={styles.divider} />
                <Typography style={styles.text}>
                  A website build on top of an existing templating engine like
                  Wordpress, Wix, Weebly etc. You will receive:
                  <ul>
                    <li>Full edit access for maintenance purposes</li>
                    <li>Search engine optimization</li>
                    <li>
                      Intro to any customizations to the template and how to
                      make future edits
                    </li>
                    <li>
                      Ongoing support, additional features, and edits at a
                      discounted rate
                    </li>
                  </ul>
                </Typography>
                <Button
                  style={styles.button}
                  variant="contained"
                  color="primary"
                  size="large"
                  component={QuoteLink}
                >
                  Start your quote
                </Button>
              </Paper>
              <Paper style={styles.productOffering} elevation={8}>
                <Typography style={styles.textSubHeader}>
                  Custom Front-end Web Developement
                </Typography>
                <Divider style={styles.divider} />
                <Typography style={styles.text}>
                  Custom built site with proprietary code from the ground-up. We
                  use the latest technologies for the quickest and best-looking
                  sites.
                  <ul>
                    <li>Full edit access for maintenance purposes</li>
                    <li>
                      Search engine optimization using the latest LD-JSON
                      standards
                    </li>
                    <li>
                      A walk-through of the code base, as well as forking rights
                      in GitHub. Code can also be maintained in a private
                      repository if you wish.
                    </li>
                    <li>
                      Ongoing support, additional features, and edits at a
                      discounted rate
                    </li>
                  </ul>
                </Typography>
                <Button
                  style={styles.button}
                  variant="contained"
                  color="primary"
                  size="large"
                  component={QuoteLink}
                >
                  Start your quote
                </Button>
              </Paper>
              <Paper style={styles.productOffering} elevation={8}>
                <Typography style={styles.textSubHeader}>
                  Software Developement
                </Typography>
                <Divider style={styles.divider} />
                <Typography style={styles.text}>
                  Full-stack development including the consumer-facing UI, as
                  well as back-end scripting, database connections, server
                  requests etc. This solution is completely customizable to your
                  needs.
                  <ul>
                    <li>
                      Complete custom back-end and front-end code, maintained in
                      a private repository.
                    </li>
                    <li>
                      A walk-through of the code base, as well as forking rights
                      in GitHub. Code can also be maintained in a private
                      repository if you wish.
                    </li>
                    <li>
                      Ongoing support, additional features, and edits at a
                      discounted rate
                    </li>
                  </ul>
                </Typography>
                <Button
                  style={styles.button}
                  variant="contained"
                  color="primary"
                  size="large"
                  component={QuoteLink}
                >
                  Start your quote
                </Button>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Development;
