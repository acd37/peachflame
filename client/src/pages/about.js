import React, { Component, Fragment } from "react";
import logo from "../images/peachflame.png";
import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia
} from "@material-ui/core";
import Banner from "../components/Banner";
import alec from "../images/alec.jpg";
import kelsey from "../images/kelsey.jpg";
import max from "../images/max.jpg";

const styles = {
  root: {
    flexGrow: 1
  },
  cardHolder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto",
    maxWidth: 400
  },
  cover: {
    width: 200,
    height: 200
  },
  card: {
    display: "flex",
    marginTop: 30,
    marginBottom: 30,
    width: 600,
    maxWidth: "90%"
  },
  headline: {
    textAlign: "left"
  },
  subheading: {
    marginBottom: 10
  }
};

class About extends Component {
  render() {
    return (
      <Fragment>
        <Banner title="Meet the Team" />

        <div style={styles.cardHolder}>
          <Card style={styles.card} elevation={24}>
            <CardMedia
              style={styles.cover}
              image={kelsey}
              title="Kelsey Down"
            />
            <div style={styles.details}>
              <CardContent style={styles.content}>
                <Typography style={styles.headline} variant="headline">
                  Kelsey{" "}
                </Typography>
                <Typography
                  style={styles.subheading}
                  variant="subheading"
                  color="textSecondary"
                >
                  Editor, Content Creator
                </Typography>
                <Typography component="p">
                  It is Kelsey's passion and privilege to work as a full-service
                  editor. She's worked across many different genres and
                  specializes in content development, so that your story is YOUR
                  story – polished.
                </Typography>
              </CardContent>
            </div>
          </Card>
          <Card style={styles.card} elevation={24}>
            <CardMedia style={styles.cover} image={alec} title="Alec Down" />
            <div style={styles.details}>
              <CardContent style={styles.content}>
                <Typography style={styles.headline} variant="headline">
                  Alec{" "}
                </Typography>
                <Typography
                  style={styles.subheading}
                  variant="subheading"
                  color="textSecondary"
                >
                  Developer
                </Typography>
                <Typography component="p">
                  Alec is a software developer with a passion for building
                  beautiful web applications. His go-to technologies are
                  MongoDB, Express, ReactJS and NodeJS, but he's also
                  comfortable working with MySQL, PHP, Python and more.
                </Typography>
              </CardContent>
            </div>
          </Card>
          <Card style={styles.card} elevation={24}>
            <CardMedia style={styles.cover} image={max} title="Max Wheeler" />
            <div style={styles.details}>
              <CardContent style={styles.content}>
                <Typography style={styles.headline} variant="headline">
                  Max{" "}
                </Typography>
                <Typography
                  style={styles.subheading}
                  variant="subheading"
                  color="textSecondary"
                >
                  Developer
                </Typography>
                <Typography component="p">
                  Max is a full-stack JavaScript developer with a passion for
                  Blockchain technology, specializing in NodeJS, VueJS, MongoDB,
                  Express and enjoys keeping up with the latest technologies.
                </Typography>
              </CardContent>
            </div>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default About;
