import React, { Component } from 'react';
import MaterialTable from 'material-table';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { deleteProject } from '../../actions/projectActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
    handleDelete = project => {
        const confirm = window.confirm(
            'Are you sure you want to delete this project? This action cannot be undone.'
        );

        if (confirm) {
            this.props.deleteProject(project._id);
        }
    };

    render() {
        return (
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
                                // console.log(rowData)
                                <Link
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fc7967'
                                    }}
                                    to={`/dashboard/update/${rowData.id}`}
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
                                    if (rowData === 'Queued') return '#ef5350';
                                    if (rowData === 'Pending') return '#FFA726';
                                })()
                            })
                        },
                        {
                            title: 'Payment Status',
                            field: 'payment_status',
                            cellStyle: rowData => ({
                                color: (function() {
                                    if (rowData === 'Pending') return '#ef5350';
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
                    data={this.props.projects.map(project => ({
                        id: project._id,
                        title: project.title,
                        client: project.client,
                        author: project.author,
                        project_fee: project.project_fee,
                        deadline: (function() {
                            if (moment(project.deadline).isBefore(moment())) {
                                return moment(project.deadline).format(
                                    'MM-DD-YY'
                                );
                            }

                            if (
                                moment(project.deadline).isAfter(moment()) &&
                                project.status === 'delivered'
                            ) {
                                return moment(project.deadline).format(
                                    'MM-DD-YY'
                                );
                            }

                            if (
                                moment(project.deadline).isAfter(moment()) &&
                                project.status !== 'delivered'
                            ) {
                                return (
                                    <div>
                                        <div style={{ color: '#66BB6A' }}>
                                            {moment(project.deadline)
                                                .add(1, 'day')
                                                .fromNow()}
                                        </div>

                                        <div>
                                            {' '}
                                            <div
                                                style={{
                                                    color: 'rgba(0,0,0,0.4'
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
                            if (project.status === 'queued') return 'Queued';
                            if (project.status === 'pending') return 'Pending';
                            if (project.status === 'delivered')
                                return <i className="material-icons">check</i>;
                        })(),
                        payment_status: (function() {
                            if (project.payment_status === 'pending')
                                return 'Pending';
                            if (project.payment_status === 'invoiced')
                                return 'Invoiced';
                            if (project.payment_status === 'paid')
                                return <i className="material-icons">check</i>;
                        })(),
                        actions: (
                            <i
                                className="material-icons"
                                style={{ cursor: 'pointer' }}
                                onClick={() => this.handleDelete(project)}
                            >
                                delete
                            </i>
                        )
                    }))}
                    title="Projects"
                />
            </div>
        );
    }
}

Table.propTypes = {
    deleteProject: PropTypes.func.isRequired
};

export default connect(
    null,
    { deleteProject }
)(Table);
