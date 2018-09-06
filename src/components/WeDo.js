import React, { Component, Fragment } from "react";
import { Typography, Button } from "@material-ui/core";

const styles = {

	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		flexDirection: 'column',
		padding: 50,
		marginRight: 30,
		marginLeft: 30,
		marginBottom: 50
	},
	text: {
		fontSize: '2em',
		fontWeight: '300',
	},
	button: {
		marginTop: 20,
		marginBottom: 20
	}
};

class WeDo extends Component {
	render() {

		return (
			<div style={styles.container}>
				<Typography style={styles.text}>
					From editing, to content creation, to putting you and your product online, we can help with any part of your writing and branding experience.
				</Typography>
				<Button style={styles.button} variant="contained" color="primary" size="large">
        			Get Started
      			</Button>
			</div>
		);
	}
}

export default (WeDo);
