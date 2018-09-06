import React, { Component, Fragment } from "react";
import logo from "../images/peachflame.png";
import { Grid, Paper, Typography } from "@material-ui/core";
import Banner from "../components/Banner";
import alec from "../images/alec.jpg";

const styles = {
  root: {
    flexGrow: 1
  },
  container: {
    marginBottom: 160
  },
  card: {
    padding: "40px",
    height: 600,
    maxWidth: 500,
    margin: 40,
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
    textAlign: "left"
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
  },
  listContainer: {
    textAlign: "left"
  },
  profileImage: {
    borderRadius: "25%",
    height: 150,
    width: 150
  }
};
class About extends Component {
  render() {
    return (
      <Fragment>
        <Banner title="About" />

        <div style={styles.container}>
          <Grid container style={styles.root} justify="center">
            <Grid style={styles.gridRow} item xs={10}>
              <Grid container justify="space-around">
                <Paper style={styles.card} elevation={24}>
                  <img
                    style={styles.profileImage}
                    src="https://via.placeholder.com/150x150"
                  />
                  <h2 style={styles.cardTitle}> Kelsey </h2>
                  <p style={styles.cardText}>
                    My Myers-Briggs personality type is INFJ, often called “The
                    Advocate”—and I consider myself an advocate for authors. I’m
                    a writer-editor turned digital marketer, now utilizing my
                    unique cross-section of skills in the publishing world.
                  </p>
                  <p style={styles.cardText}>
                    My detour into digital marketing taught me how to guide
                    projects from ideation to execution, then promote those
                    projects to editors at top-tier digital publications. Every
                    day I make tough judgment calls about whether an idea is
                    marketable and tenable.{" "}
                  </p>

                  <p style={styles.cardText}>
                    My background includes freelance work editing fiction and
                    non-fiction, writing online articles, and more recently even
                    reviewing books; digital media experience managing a
                    worldwide network of more than 6,000 writers, searching for
                    stories with potential and teaming up with writers to
                    improve their craft; and editorial experience in a
                    publishing house, reading and evaluating manuscripts, making
                    recommendations for publication or rejection, and writing
                    marketing copy and cover blurbs. I also studied Creative
                    Writing at the Oxford University summer program and have
                    continued to take classes in literature, writing, and
                    editing for my personal development.
                  </p>
                  <p style={styles.cardText}>
                    I am a tenacious go-getter whose determination, enthusiasm,
                    and energy buoys authors’ spirits and helps bring the best
                    stories to readers.
                  </p>
                </Paper>
                <Paper style={styles.card} elevation={24}>
                  <img style={styles.profileImage} src={alec} />
                  <h2 style={styles.cardTitle}> Alec </h2>

                  <p style={styles.cardText}>
                    I'm a software developer with a passion for building
                    beautiful web apps. My typical go-to technologies articles
                    MongoDB, Express, ReactJS and NodeJS, but I'm also
                    comfortable working with MySQL, PHP, Python and more.
                  </p>
                  <p style={styles.cardText}>
                    I've been developing sites on and off for several years, and
                    recently made the jump to doing what I enjoy full-time.
                  </p>

                  <p style={styles.cardText}>
                    My background includes an undergraduate degree in German and
                    Portuguese literature, a graduate degree in education, and
                    professional training in full-stack development. When I'm
                    not working or studying, I enjoy spending my time coding up
                    hobby apps, playing with my kid, or binge-watching TV :)
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

export default About;
