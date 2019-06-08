import React, { Component, Fragment } from 'react';
import Banner from '../components/Banner';
import { Typography, Grid, Paper, Divider } from '@material-ui/core';

const styles = {
    card: {
        border: 'none',
        margin: 10,
        padding: 40,
        boxShadow: '0 12px 15px rgba(0,0,0,0.1), 0 17px 50px rgba(0,0,0,0.1)',
        borderRadius: '.375rem',
        width: 300
    },
    cardContainer: {
        margin: 20,
        padding: 20,
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
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
        textAlign: 'left'
    },
    pricing: {
        fontSize: '0.9em',
        fontWeight: '300',
        color: 'rgb(37,56,88)',
        textAlign: 'left'
    },
    divider: {
        marginBottom: 20,
        border: 'none',
        height: '1px',
        color: 'rgba(0,0,0,0.2)',
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
};

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Banner title="Services" />

                <div style={styles.cardContainer}>
                    <div style={styles.card}>
                        <h1 style={styles.textSubHeader}> Developmental Edit </h1>
                        <h2 style={styles.pricing}> $0.03–$0.06 per word </h2>
                        <hr style={styles.divider} />
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
                    </div>


                    <div style={styles.card}>
                        <h1 style={styles.textSubHeader}>Line Edit</h1>
                        <h2 style={styles.pricing}> $0.02–$0.05 per word </h2>
                        <hr style={styles.divider} />
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
                    </div>


                    <div style={styles.card}>
                        <h1 style={styles.textSubHeader}>Copy Edit</h1>
                        <h2 style={styles.pricing}> $0.01–$0.04 per word </h2>
                        <hr style={styles.divider} />
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
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Services;