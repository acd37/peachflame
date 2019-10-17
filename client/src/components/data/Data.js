import React, { Component } from 'react';
import { getProjectData } from '../../actions/projectActions';
import { connect } from 'react-redux';
import DataCard from './DataCard';

const styles = {
    cardContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: 30
    }
};

class Data extends Component {
    componentDidMount() {
        this.props.getProjectData();
    }

    render() {
        const { projectData } = this.props.projects;

        return (
            <div style={styles.cardContainer}>
                {projectData.jan > 0 && (
                    <DataCard month="Jan" dataValue={projectData.jan} />
                )}
                {projectData.feb > 0 && (
                    <DataCard month="Feb" dataValue={projectData.feb} />
                )}
                {projectData.mar > 0 && (
                    <DataCard month="Mar" dataValue={projectData.mar} />
                )}
                {projectData.apr > 0 && (
                    <DataCard month="Apr" dataValue={projectData.apr} />
                )}
                {projectData.may > 0 && (
                    <DataCard month="May" dataValue={projectData.may} />
                )}
                {projectData.jun > 0 && (
                    <DataCard month="Jun" dataValue={projectData.jun} />
                )}
                {projectData.jul > 0 && (
                    <DataCard month="Jul" dataValue={projectData.jul} />
                )}
                {projectData.aug > 0 && (
                    <DataCard month="Aug" dataValue={projectData.aug} />
                )}
                {projectData.sep > 0 && (
                    <DataCard month="Sep" dataValue={projectData.sep} />
                )}
                {projectData.oct > 0 && (
                    <DataCard month="Oct" dataValue={projectData.oct} />
                )}
                {projectData.nov > 0 && (
                    <DataCard month="Nov" dataValue={projectData.nov} />
                )}
                {projectData.dec > 0 && (
                    <DataCard month="Dec" dataValue={projectData.dec} />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    projects: state.projects,
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { getProjectData }
)(Data);
