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
    color: "rgb(37,56,88)",
    display: "inline-flex"
  },
  pricing: {
    fontSize: "0.9em",
    fontWeight: "300",
    color: "rgb(37,56,88)",
    marginLeft: 10,
    display: "inline-flex"
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

class Editing extends Component {
  render() {
    return (
      <Fragment>
        <Banner title="Editing" />
        <Grid container justify="center">
          <Grid item xs={8}>
            <div style={styles.container}>
              <Typography style={styles.textHeader}>Services</Typography>
              <Paper style={styles.productOffering} elevation={8}>
                <Typography style={styles.textSubHeader}>
                  Reader Report,
                </Typography>
                <Typography style={styles.pricing}>
                  $0.010 - $0.100 per word. $200 minimum.
                </Typography>
                <Divider style={styles.divider} />
                <Typography style={styles.text}>
                  A high-level assessment of your manuscript, with actionable
                  advice for improvement. You will receive:
                  <ul>
                    <li>In-line suggestions & comments on your manuscript</li>
                    <li>
                      A one to two-page evaluation of your manuscript,
                      identifying key areas of improvement
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
                  Get more details
                </Button>
              </Paper>
              <Paper style={styles.productOffering} elevation={8}>
                <Typography style={styles.textSubHeader}>
                  Developmental Edit
                </Typography>
                <Typography style={styles.pricing}>
                  $0.018 - $0.180 per word. $200 minimum.
                </Typography>
                <Divider style={styles.divider} />
                <Typography style={styles.text}>
                  A detailed edit of your entire manuscript, focusing on
                  structural and conceptual issues over grammatical errors. You
                  will receive:
                  <ul>
                    <li>In-line suggestions & comments on your manuscript</li>
                    <li>
                      A five to ten-page editorial report of your manuscript,
                      assessing key literary elements in your story and offering
                      detailed suggestions for improvement
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
                  Get more details
                </Button>
              </Paper>
              <Paper style={styles.productOffering} elevation={8}>
                <Typography style={styles.textSubHeader}>Line Edit</Typography>
                <Typography style={styles.pricing}>
                  $0.016 - $0.160 per word. $200 minimum.
                </Typography>
                <Divider style={styles.divider} />
                <Typography style={styles.text}>
                  A line-by-line style edit of your entire manuscript or a
                  select portion, focusing on sentence revision and polishing.
                  You will receive:
                  <ul>
                    <li>In-line suggestions & comments on your manuscript</li>
                    <li>
                      A three to five-page editorial report of your manuscript,
                      assessing key elements of writing style and offering
                      detailed suggestions for improvement
                    </li>
                    <li>
                      An optional reread after implementing our suggested edits
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
                  Get more details
                </Button>
              </Paper>
              <Paper style={styles.productOffering} elevation={8}>
                <Typography style={styles.textSubHeader}>
                  Copy Edit & Proofread
                </Typography>
                <Typography style={styles.pricing}>
                  $0.012 - $0.120 per word. $200 minimum.
                </Typography>
                <Divider style={styles.divider} />
                <Typography style={styles.text}>
                  A line-by-line grammatical edit of your entire manuscript or a
                  select portion, focusing on technical errors like misspelled
                  words or incorrect punctuation. You will receive:
                  <ul>
                    <li>In-line suggestions & comments on your manuscript</li>
                    <li>
                      A one to three-page editorial report of your manuscript,
                      assessing key grammatical issues and offering detailed
                      suggestions for improvement
                    </li>
                    <li>
                      An optional reread after implementing our suggested edits
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
                  Get more details
                </Button>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Editing;
