import React, { Component, Fragment } from 'react';
import Banner from '../components/Banner';
import { Typography, Grid, Paper, Divider } from '@material-ui/core';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 50
    },
    productOffering: {
        padding: 20,
        marginTop: 15,
        marginBottom: 15
    },
    textHeader: {
        fontSize: '2em',
        color: 'rgb(37,56,88)',
        marginBottom: 30
    },
    textSubHeader: {
        fontSize: '1.8em',
        fontWeight: '300',
        color: 'rgb(37,56,88)',
        display: 'inline-flex'
    },
    pricing: {
        fontSize: '0.9em',
        fontWeight: '300',
        color: 'rgb(37,56,88)',
        marginLeft: 10,
        display: 'inline-flex'
    },
    divider: {
        marginBottom: 20
    }
};

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Banner title="Services" />
                <Grid container justify="center">
                    <Grid item xs={8}>
                        <div style={styles.container}>
                            <Paper style={styles.productOffering} elevation={8}>
                                <Typography style={styles.textSubHeader}>
                                    Developmental Edit
                </Typography>
                                <Typography style={styles.pricing}>
                                    $0.03–$0.06 per word
                </Typography>
                                <Divider style={styles.divider} />
                                <p>
                                    The developmental edit addresses structural and conceptual
                                    issues over grammatical errors. This could be the right
                                    service for you if you find yourself wondering things like,
                                    Does my story work? How can I elevate the conflict? or Are
                                    these characters believable?
                </p>
                                You will receive:
                <ul>
                                    <li>In-line suggestions & comments on your manuscript</li>
                                    <li>
                                        A five to ten-page editorial report of your manuscript,
                                        assessing key literary elements in your story and offering
                                        detailed suggestions for improvement
                  </li>
                                </ul>
                            </Paper>
                            <Paper style={styles.productOffering} elevation={8}>
                                <Typography style={styles.textSubHeader}>Line Edit</Typography>
                                <Typography style={styles.pricing}>
                                    $0.02–$0.05 per word
                </Typography>
                                <Divider style={styles.divider} />
                                <p style={styles.text}>
                                    The line edit addresses sentence revision and polishing. You
                                    might need a line edit if you feel confident about the story
                                    itself—and less confident about your writing style. The line
                                    edit may address some grammatical issues, but the priority is
                                    to help each individual sentence shine and make a stronger
                                    impact.
                </p>
                                You will receive:
                <ul>
                                    <li>In-line suggestions & comments on your manuscript</li>
                                    <li>
                                        A three to five-page editorial report of your manuscript,
                                        assessing key elements of writing style and offering
                                        detailed suggestions for improvement
                  </li>
                                </ul>
                            </Paper>
                            <Paper style={styles.productOffering} elevation={8}>
                                <Typography style={styles.textSubHeader}>Copy Edit</Typography>
                                <Typography style={styles.pricing}>
                                    $0.01–$0.04 per word
                </Typography>
                                <Divider style={styles.divider} />
                                <p style={styles.text}>
                                    The copy edit addresses grammatical errors like misspelled
                                    words and incorrect punctuation. A copy edit should come after
                                    both developmental and line editing because the focus will be
                                    on fixing only those pesky technical mistakes rather than
                                    big-picture problems.
                </p>
                                You will receive:
                <ul>
                                    <li>In-line suggestions & comments on your manuscript</li>
                                    <li>
                                        A one to three-page editorial report of your manuscript,
                                        assessing key grammatical issues and offering detailed
                                        suggestions for improvement
                  </li>
                                </ul>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

export default Services;