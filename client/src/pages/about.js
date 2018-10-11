import React, { Component, Fragment } from "react";
import { Typography, Card, CardContent, CardMedia } from "@material-ui/core";
import Banner from "../components/Banner";
import alec from "../images/alec.png";
import kelsey from "../images/kelsey.png";
import max from "../images/max.png";

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
    maxWidth: 500
  },
  cover: {
    width: 210,
    height: 210
  },
  card: {
    display: "flex",
    marginTop: 30,
    marginBottom: 30,
    width: 700,
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
                  Kelsey has more than five years of experience working with
                  writers of all skill levels, both in fiction and non-fiction
                  fields. She's drawn to speculative fiction and #OwnVoices
                  stories, but she has also edited historical and contemporary
                  romance, academic papers, memoir, and numerous other genres.
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
