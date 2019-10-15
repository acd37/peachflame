import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        errors: PropTypes.object.isRequired,
        messages: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const { errors, messages, alert } = this.props;

        if (errors !== prevProps.errors) {
            if (errors.msg.data.password) {
                alert.error(errors.msg.data.password);
            }
            if (errors.msg.data.email) {
                alert.error(errors.msg.data.email);
            }
        }

        if (messages !== prevProps.messages) {
            if (messages.client) {
                alert.error(messages.client);
            }
            if (messages.project_type) {
                alert.error(messages.project_type);
            }
            if (messages.title) {
                alert.error(messages.title);
            }
            if (messages.author) {
                alert.error(messages.author);
            }
            if (messages.word_count) {
                alert.error(messages.word_count);
            }
            if (messages.project_fee) {
                alert.error(messages.project_fee);
            }
            if (messages.deadline) {
                alert.error(messages.deadline);
            }
            if (messages.sow_number) {
                alert.error(messages.sow_number);
            }
            if (messages.projectCreated) {
                alert.success(messages.projectCreated);
            }
            if (messages.projectDeleted) {
                alert.success(messages.projectDeleted);
            }
            if (messages.projectUpdated) {
                alert.success(messages.projectUpdated);
            }
            if (messages.updateError) {
                alert.error(messages.updateError);
            }
        }
    }

    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
    messages: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
