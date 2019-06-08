import React, { Component, Fragment } from "react";
import { Typography } from "@material-ui/core";

const styles = {
    appHeader: {
        background: "linear-gradient(to left, #00c6ff, #0072ff)",
        marginTop: 80,
        height: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
};

class Banner extends Component {
    render() {
        return (
            <Fragment>
                <div style={styles.appHeader} />
                <h1>
                    {this.props.title}
                </h1>
            </Fragment>
        );
    }
}

export default Banner;
