import React, { Component, Fragment } from 'react';
import { Typography } from '@material-ui/core';
import Banner from '../components/Banner';
import kelsey from '../images/kelsey.jpg';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    cover: {
        width: 210,
        height: 210,
        marginTop: 30,
        marginBottom: 30,
        borderRadius: 10
    },
    card: {
        marginBottom: 30,
        width: 700,
        padding: 30,
        textAlign: 'center',
        maxWidth: '90%'
    }
};

class Editor extends Component {
    render() {
        return (
            <Fragment>
                <div style={styles.container}>
                    <Banner title="Meet the Editor" />
                    <img
                        style={styles.cover}
                        src={kelsey}
                        title="Kelsey Down"
                        alt="Kelsey Down"
                    />

                    <div
                        style={{
                            width: 960,
                            maxWidth: '90%',
                            margin: '30px auto',
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="subheading" gutterBottom>
                            Kelsey has more than five years of experience
                            working with writers of all skill levels, both in
                            fiction and non-fiction fields. She's drawn to
                            speculative fiction and #OwnVoices stories, but she
                            has also edited historical and contemporary romance,
                            academic papers, memoir, young adult fiction, and
                            numerous other genres.
                        </Typography>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Editor;