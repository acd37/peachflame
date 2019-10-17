import React, { Component } from 'react';
import { getUserProjects, deleteProject } from '../../actions/projectActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LinearProgress } from '@material-ui/core/';
import Banner from '../common/Banner';
import { Link } from 'react-router-dom';
import Data from '../data/Data';
import MaterialTable from 'material-table';
import moment from 'moment';

const styles = {
    peachAlert: {
        margin: '0 auto',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 0,
        backgroundColor: '#fdd9d7',
        color: '#7f231c',
        textAlign: 'center',
        maxWidth: '90%',
        width: 800
    },
    loadingWrapper: {
        margin: '100px auto',
        maxWidth: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
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
    noProjects: {
        textAlign: 'center',
        marginBottom: 30
    }
};

class Dashboard extends Component {
    componentDidMount() {
        this.props.getUserProjects();
    }

    handleDelete = project => {
        const confirm = window.confirm(
            'Are you sure you want to delete this project? This action cannot be undone.'
        );

        if (confirm) {
            this.props.deleteProject(project._id);
        }
    };

    render() {
        const { loading, projects } = this.props.projects;
        let content;

        if (loading) {
            content = (
                <div style={styles.loadingWrapper}>
                    <img
                        src={require('../../images/peachflame.png')}
                        style={styles.logo}
                        alt="cs logo"
                    />
                    <p style={styles.loadingText}>Loading data...</p>
                    <LinearProgress style={styles.progress} color="primary" />
                </div>
            );
        } else {
            content = (
                <div>
                    <Banner title="Dashboard" />
                    {(new Date().getMonth() === 2 &&
                        new Date().getDate() > 14) ||
                    (new Date().getMonth() === 5 &&
                        new Date().getDate() > 14) ||
                    (new Date().getMonth() === 8 &&
                        new Date().getDate() > 14) ||
                    (new Date().getMonth() === 11 &&
                        new Date().getDate() > 14) ? (
                        <div style={styles.peachAlert}>
                            {' '}
                            <strong>Alert: </strong>Don't forget your estimated
                            tax payment{' '}
                        </div>
                    ) : (
                        ''
                    )}

                    <Data />
                    <div style={{ maxWidth: '100%', margin: 30 }}>
                        <MaterialTable
                            style={{
                                borderRadius: 10
                            }}
                            options={{
                                pageSize: 5,
                                headerStyle: {
                                    backgroundColor: '#eee',
                                    textTransform: 'uppercase',
                                    fontSize: '0.7rem',
                                    color: 'rgba(0,0,0,0.5)'
                                },
                                searchFieldStyle: {
                                    width: 400,
                                    padding: 3
                                }
                            }}
                            columns={[
                                {
                                    title: 'Title',
                                    field: 'title',
                                    render: rowData => (
                                        <Link
                                            style={{
                                                textDecoration: 'none',
                                                color: '#fc7967'
                                            }}
                                            to={`/dashboard/update/${rowData._id}`}
                                        >
                                            {rowData.title}
                                        </Link>
                                    )
                                },
                                { title: 'Client', field: 'client' },
                                { title: 'Author', field: 'author' },
                                {
                                    title: 'Fee',
                                    field: 'project_fee',
                                    type: 'currency'
                                },
                                {
                                    title: 'Deadline',
                                    field: 'deadline',
                                    type: 'date'
                                },
                                {
                                    title: 'Status',
                                    field: 'status',
                                    cellStyle: rowData => ({
                                        color: (function() {
                                            if (rowData === 'Queued')
                                                return '#ef5350';
                                            if (rowData === 'Pending')
                                                return '#FFA726';
                                        })()
                                    })
                                },
                                {
                                    title: 'Payment Status',
                                    field: 'payment_status',
                                    cellStyle: rowData => ({
                                        color: (function() {
                                            if (rowData === 'Pending')
                                                return '#ef5350';
                                            if (rowData === 'Invoiced')
                                                return '#FFA726';
                                        })()
                                    })
                                },
                                {
                                    title: 'Actions',
                                    field: 'actions'
                                }
                            ]}
                            data={projects.map(project => ({
                                title: project.title,
                                client: project.client,
                                author: project.author,
                                project_fee: project.project_fee,
                                deadline: (function() {
                                    if (
                                        moment(project.deadline).isBefore(
                                            moment()
                                        )
                                    ) {
                                        return moment(project.deadline).format(
                                            'MM-DD-YY'
                                        );
                                    }

                                    if (
                                        moment(project.deadline).isAfter(
                                            moment()
                                        ) &&
                                        project.status === 'delivered'
                                    ) {
                                        return moment(project.deadline).format(
                                            'MM-DD-YY'
                                        );
                                    }

                                    if (
                                        moment(project.deadline).isAfter(
                                            moment()
                                        ) &&
                                        project.status !== 'delivered'
                                    ) {
                                        return (
                                            <div>
                                                <div
                                                    style={{ color: '#66BB6A' }}
                                                >
                                                    {moment(project.deadline)
                                                        .add(1, 'day')
                                                        .fromNow()}
                                                </div>

                                                <div>
                                                    {' '}
                                                    <div
                                                        style={{
                                                            color:
                                                                'rgba(0,0,0,0.4'
                                                        }}
                                                    >
                                                        {moment(
                                                            project.deadline
                                                        ).format('(MM-DD-YY)')}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })(),
                                status: (function() {
                                    if (project.status === 'queued')
                                        return 'Queued';
                                    if (project.status === 'pending')
                                        return 'Pending';
                                    if (project.status === 'delivered')
                                        return (
                                            <i className="material-icons">
                                                check
                                            </i>
                                        );
                                })(),
                                payment_status: (function() {
                                    if (project.payment_status === 'pending')
                                        return 'Pending';
                                    if (project.payment_status === 'invoiced')
                                        return 'Invoiced';
                                    if (project.payment_status === 'paid')
                                        return (
                                            <i className="material-icons">
                                                check
                                            </i>
                                        );
                                })(),
                                actions: (
                                    <i
                                        className="material-icons"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() =>
                                            this.handleDelete(project)
                                        }
                                    >
                                        delete
                                    </i>
                                )
                            }))}
                            title="Projects"
                        />
                    </div>

                    {projects.length < 1 && (
                        <p style={styles.noProjects}>
                            {' '}
                            There are no projects here yet.{' '}
                            <Link to="/dashboard/create/">
                                Get started!{' '}
                            </Link>{' '}
                        </p>
                    )}
                </div>
            );
        }

        return <div>{content}</div>;
    }
}

Dashboard.propTypes = {
    getUserProjects: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    projects: state.projects,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { getUserProjects, deleteProject }
)(Dashboard);
