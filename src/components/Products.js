import React, { Component, Fragment } from "react";
import logo from "../images/peachflame.png";
import { Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1
  },
  container: {
    marginBottom: 160
  },
  card: {
    padding: "20px",
    height: 300,
    maxWidth: 500,
    margin: 40,
    marginTop: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  cardTitle: {
    textAlign: "center"
  },
  cardImage: {
    maxHeight: "40px",
    marginTop: "20px"
  },
  cardText: {
    fontSize: "1em",
    color: "rgb(110, 120, 134)",
    lineHeight: 1.6,
    textAlign: "center"
  },
  snippetHeader: {
    color: "rgb(37,56,88)",
    fontSize: "1.5em",
    fontWeight: 600
  },
  snippet: {
    color: "rgb(37,56,88)",
    fontSize: "1em",
    marginBottom: 20
  },
  textBox: {
    width: 400,
    marginTop: 75
  },
  gridRow: {
    marginBottom: 200
  }
};

class Products extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className={classes.container}>
          <Grid container className={classes.root} justify="center">
            <Grid style={styles.gridRow} item xs={10}>
              <Grid container justify="space-around">
                <Paper className={classes.card} elevation={24}>
                  <img className={classes.cardImage} src={logo} />
                  <h2 className={classes.cardTitle}> Editorial </h2>
                  <p className={classes.cardText}>
                    If you're looking to get into the publishing sphere, then
                    let us connect you with one of our professional editors who
                    can help you perfect your book, article, thesis, or whatever
                    it is you're working on.{" "}
                  </p>
                </Paper>
                <div style={styles.textBox}>
                  <Typography style={styles.snippetHeader}>Edit</Typography>
                  <Typography style={styles.snippet}>
                    Get the clarity you need, fix up your work, and make it
                    better than ever before.
                  </Typography>
                  <Typography style={styles.snippetHeader}>Publish</Typography>
                  <Typography style={styles.snippet}>
                    We'll help you find a publisher that fits your needs.
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid style={styles.gridRow} item xs={10}>
              <Grid container justify="space-around">
                <div style={styles.textBox}>
                  <Typography style={styles.snippetHeader}>Create</Typography>
                  <Typography style={styles.snippet}>
                    Need help finding the right words? Or images? We can help!
                  </Typography>
                  <Typography style={styles.snippetHeader}>
                    Publicize
                  </Typography>
                  <Typography style={styles.snippet}>
                    Once your piece is finished, it's time to get it out there
                    for the world to see.
                  </Typography>
                </div>
                <Paper className={classes.card} elevation={24}>
                  <img className={classes.cardImage} src={logo} />
                  <h2 className={classes.cardTitle}> Content Creation </h2>
                  <p className={classes.cardText}>
                    Ghost writing, product and marketing copy, blog content,
                    anything that puts words on a page, we can do it for you.
                    Our highly trained content creators have years of
                    professional experience in traffic and revenue growth.{" "}
                  </p>
                </Paper>
              </Grid>
            </Grid>
            <Grid style={styles.gridRow} item xs={10}>
              <Grid container justify="space-around">
                <Paper className={classes.card} elevation={24}>
                  <img className={classes.cardImage} src={logo} />
                  <h2 className={classes.cardTitle}> Web Development </h2>
                  <p className={classes.cardText}>
                    Whether it's promoting your writing, your business, your own
                    portfolio, let us create something that tells your story.
                    Our full-time developers work with you every step, from
                    discussing your initial needs to providing ongoing support
                    after product launch.{" "}
                  </p>
                </Paper>
                <div style={styles.textBox}>
                  <Typography style={styles.snippetHeader}>Plan</Typography>
                  <Typography style={styles.snippet}>
                    Making a good product plan is just as important as
                    developing the product. We'll work with you on your needs.
                  </Typography>
                  <Typography style={styles.snippetHeader}>Develop</Typography>
                  <Typography style={styles.snippet}>
                    Then we develop your product using the technologies{" "}
                    <strong>you</strong> are comfortable with. We'll even help
                    get it published on the interweb!
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Products);
