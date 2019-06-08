import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteProject } from '../actions/projectActions';
import moment from 'moment';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    projectCard: {
        border: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        margin: 30,
        padding: 20,
        boxShadow: '0 12px 15px rgba(0,0,0,0.1), 0 17px 50px rgba(0,0,0,0.1)',
        borderRadius: '.375rem',
        transition: '.25s ease-in-out',
        '&:hover': {
            transform: 'translatey(-3%)'
        }
    },
    success_chip: {
        height: 22,
        background: '#66BB6A',
        color: '#fff'
    },
    caution_chip: {
        height: 22,
        color: '#fff',
        background: '#FFA726'
    },
    danger_chip: {
        height: 22,
        color: '#fff',
        background: '#ef5350'
    },
    titleCell: {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    cardText: {
        fontSize: '0.8rem',
        color: 'rgba(0,0,0,0.5)',
        whiteSpace: 'nowrap'
    }
});

class Project extends Component {
    state = {};

    handleDelete = (project) => {
        this.props.deleteProject(project._id);
    }

    render() {
        const { classes, project } = this.props;

        return (
            <div className={classes.projectCard} key={project.id}>
                <div className={classes.cardText}>
                    <Link
                        className="project-link-style"
                        to={`/dashboard/update/${project._id}`}
                    >
                        {project.title}
                    </Link>
                </div>
                <div className={classes.cardText}>
                    {project.client}
                </div>
                <div className={classes.cardText}>
                    {project.author}
                </div>
                <div className={classes.cardText}>
                    ${project.project_fee.toLocaleString()}
                </div>

                <div
                    className={classes.cardText}

                >
                    {/* This renders if the project deadline has already passed */}
                    {moment(project.deadline).isBefore(moment()) && (
                        <div className={classes.cardText}>
                            {moment(project.deadline).format('MM-DD-YY')}
                        </div>
                    )}

                    {/* This renders if the project deadline is upcoming and the project has already been delivered */}
                    {moment(project.deadline).isAfter(moment()) &&
                        project.status === 'delivered' && (
                            <div className={classes.cardText}>
                                {moment(project.deadline).format('MM-DD-YY')}
                            </div>
                        )}

                    {/* This renders if the project deadline is upcoming and the project has not yet been delivered */}
                    {moment(project.deadline).isAfter(moment()) &&
                        project.status !== 'delivered' && (
                            <div className={classes.cardText}>
                                <div style={{ color: '#66BB6A' }}>
                                    {moment(project.deadline).add(1, "day").fromNow()}
                                </div>

                                <div>
                                    {' '}
                                    <div
                                        style={{
                                            color: 'rgba(0,0,0,0.4'
                                        }}
                                    >
                                        {moment(project.deadline).format(
                                            '(MM-DD-YY)'
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
                <div>
                    {project.status === 'delivered' && (
                        <Chip
                            label={`Status: ${project.status}`}
                            className={classes.success_chip}
                        />

                    )}
                    {project.status === 'pending' && (
                        <Chip
                            label={`Status: ${project.status}`}
                            className={classes.caution_chip}
                        />
                    )}
                    {project.status === 'queued' && (
                        <Chip
                            label={`Status: ${project.status}`}
                            className={classes.danger_chip}
                        />
                    )}
                </div>
                <div>
                    {project.payment_status === 'paid' && (
                        <Chip
                            label={`Pmt: ${project.payment_status}`}
                            className={classes.success_chip}
                        />
                    )}
                    {project.payment_status === 'pending' && (
                        <Chip
                            label={`Pmt: ${project.payment_status}`}
                            className={classes.caution_chip}
                        />
                    )}
                    {project.payment_status === 'invoiced' && (
                        <Chip
                            label={`Pmt: ${project.payment_status}`}
                            className={classes.danger_chip}
                        />
                    )}
                </div>
                <div>
                    {' '}
                    <i
                        onClick={() => this.handleDelete(project)}
                        className="fas fa-trash fa-icon"
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

export default connect(
    mapStateToProps,
    { deleteProject }
)(withStyles(styles)(Project));