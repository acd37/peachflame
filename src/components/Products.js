import React, { Component, Fragment } from "react";
import logo from "../images/peachflame.png";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1,
    paddingBottom: 80
  },
  card: {
    padding: "20px",
    height: 375,
    width: 300,
    margin: 20,
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
  }
};

class Products extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <div className="productsContainer">
          <Grid container className={classes.root}>
            <Grid item xs={12}>
              <Grid container justify="center">
                <Paper className={classes.card} elevation={2}>
                  <img className={classes.cardImage} src={logo} />
                  <h2 className={classes.cardTitle}> Editorial </h2>
                  <p className={classes.cardText}>
                    If you're looking to get into the publishing sphere, then
                    let us connect you with one of our professional editors who
                    can help you perfect your book, article, thesis, or whatever
                    it is you're working on.{" "}
                  </p>
                </Paper>
                <Paper className={classes.card} elevation={2}>
                  <img className={classes.cardImage} src={logo} />
                  <h2 className={classes.cardTitle}> Content Creation </h2>
                  <p className={classes.cardText}>
                    Ghost writing, product and marketing copy, blog content,
                    anything that puts words on a page, we can do it for you.
                    Our highly trained content creators have years of
                    professional experience in traffic and revenue growth.{" "}
                  </p>
                </Paper>

                <Paper className={classes.card} elevation={2}>
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
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Products);
