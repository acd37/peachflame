import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    flex: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "transparent",
        boxShadow: "none"
    },
    appBarButton: {
        color: "#fff",
        fontWeight: '800',
        fontSize: "1em"
    }
}

export default function Appbar() {
        return(

            <AppBar style={styles.appBar} position="absolute">
                <Toolbar>
                    <Button style={styles.appBarButton} color="inherit">About</Button>
                    <Button style={styles.appBarButton} color="inherit">Editing</Button>
                    <Button style={styles.appBarButton} color="inherit">Web Design</Button>
                    <Button style={styles.appBarButton} color="inherit">Tools</Button>
                </Toolbar>
            </AppBar>


        );
}