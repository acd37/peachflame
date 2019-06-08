import React, { Component } from 'react'
import { getUserProjects } from '../actions/projectActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LinearProgress, Button } from '@material-ui/core/';
import Project from '../components/Project';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const styles = {
    loadingWrapper: {
        margin: '30px auto',
        maxWidth: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    logo: {
        height: 75,
        width: 75,
        display: 'block',
        margin: '20px auto'
    },
    progress: {
        width: 250,
        display: 'block',
        margin: '20px auto'
    },
    loadingText: {
        textAlign: 'center',
        color: '#5e5e5e',
        fontWeight: 300,
        fontSize: '1.3rem'
    },
    linkButton: {
        color: "#fff",
        textDecoration: 'none'
    }
}

class Dashboard extends Component {

    componentDidMount() {
        this.props.getUserProjects();
    }

    render() {

        const { loading, projects } = this.props.projects;
        let content;

        if (loading) {
            content = (
                <div style={styles.loadingWrapper}>
                    <img src={require('../images/peachflame.png')} style={styles.logo} alt="cs logo" />
                    <p style={styles.loadingText}>
                        Loading data...
                  </p>
                    <LinearProgress style={styles.progress} color="primary" />
                </div>
            )
        } else {
            content = (
                <div>
                    <Banner title="Dashboard" />

                    <h2> Projects </h2>

                    {projects &&
                        <div>
                            {projects.map(project => (
                                <Project key={project.id} project={project} />
                            ))}
                        </div>
                    }
                </div>
            )



        }

        return (
            <div>
                {content}
            </div>
        )
    }
}

Dashboard.propTypes = {
    getUserProjects: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    // projects: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    projects: state.projects,
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    { getUserProjects }
)(Dashboard);