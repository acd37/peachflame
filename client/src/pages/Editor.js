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
    card: {
        border: 'none',
        margin: 20,
        marginBottom: 50,
        padding: '20px 50px',
        boxShadow: '0 12px 15px rgba(0,0,0,0.1), 0 17px 50px rgba(0,0,0,0.1)',
        borderRadius: '.375rem',
        width: 600
    },
    cover: {
        width: 210,
        height: 210,
        display: 'block',
        margin: '30px auto',
        borderRadius: '0.375rem',
        boxShadow: '0 12px 15px rgba(0,0,0,0.1), 0 17px 50px rgba(0,0,0,0.1)'
    },
};

class Editor extends Component {
    render() {
        return (
            <Fragment>
                <Banner title="Meet the Editor" />
                <div style={styles.container}>
                    <div style={styles.card}>
                        <img
                            style={styles.cover}
                            src={kelsey}
                            title="Kelsey Down"
                            alt="Kelsey Down"
                        />
                        <p>
                            Kelsey has more than five years of experience
                                working with writers of all skill levels, both in
                                fiction and non-fiction fields. She's drawn to
                                speculative fiction and #OwnVoices stories, but she
                                has also edited historical and contemporary romance,
                                academic papers, memoir, young adult fiction, and
                                numerous other genres.
                            </p>

                    </div>

                </div>



            </Fragment >



        );
    }
}
export default Editor;