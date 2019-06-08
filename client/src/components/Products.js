import React, { Component, Fragment } from "react";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    root: {
        flexGrow: 1
    },
    container: {
        marginBottom: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    card: {
        padding: "40px",
        minHeight: 500,
        maxWidth: 350,
        margin: 20,
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
        marginBottom: 40
    },
    listContainer: {
        textAlign: "left"
    }
};

class Products extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <div className={classes.container}>
                    <Paper className={classes.card} elevation={24}>
                        <img className={classes.cardImage} src={require('../../images/peachflame.png')} alt="logo" />
                        <h2 className={classes.cardTitle}> Editorial </h2>
                        <div className={classes.cardText}>
                            PeachFlame will serve as your author advocate throughout the
                            editing and marketing process. We consider all genres, but we
                            gravitate toward speculative fiction, YA fiction, narrative
                            nonfiction, or memoir. Our book editing and marketing clients
                            typically include:
              <div style={styles.listContainer}>
                                <ul>
                                    <li>First-time authors</li>
                                    <li>Self-published authors</li>
                                    <li>Traditionally published authors</li>
                                    <li>Independent & hybrid publishing companies</li>
                                    <li>
                                        Underrepresented voices (women, POC, queer writers & more)
                  </li>
                                </ul>
                            </div>
                        </div>
                    </Paper>
                    <Paper className={classes.card} elevation={24}>
                        <img className={classes.cardImage} src={require('../../images/peachflame.png')} alt="logo" />
                        <h2 className={classes.cardTitle}> Web Development </h2>
                        <div className={classes.cardText}>
                            PeachFlame will collaborate with you to create a beautiful,
                            intuitive website that communicates exactly the message and
                            experience you want to share with the world. Our web design
                            clients typically include:
              <div style={styles.listContainer}>
                                <ul>
                                    <li>Small businesses & start-ups</li>
                                    <li>Authors & creative professionals</li>
                                    <li>Solopreneurs</li>
                                    <li>Job-seekers</li>
                                </ul>
                            </div>
                        </div>
                    </Paper>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styles)(Products);