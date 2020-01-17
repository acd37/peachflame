import React, { Component } from "react";
import { getProjectData } from "../../actions/projectActions";
import { connect } from "react-redux";
import DataCard from "./DataCard";
import InputLabel from "../common/InputLabel";

const styles = {
  cardContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    margin: 30
  }
};

class Data extends Component {
  state = {
    selectedYear: new Date().getFullYear().toString()
  };

  componentDidMount() {
    this.props.getProjectData(this.state.selectedYear);
  }

  onChangeYear = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.getProjectData(e.target.value);
  };

  render() {
    const { projectData } = this.props.projects;
    const currentYear = new Date().getFullYear();

    return (
      <div>
        <div style={{ margin: 30 }}>
          <InputLabel htmlFor="selectedYear" text="Change year:" />
          <select
            style={{
              fontSize: "0.9rem",
              color: "rgba(0,0,0,0.8)",
              marginRight: 20
            }}
            value={this.state.selectedYear}
            onChange={this.onChangeYear}
            name="selectedYear"
            className="year-select-css"
          >
            <option value={currentYear}>{currentYear}</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select>
        </div>

        <div style={styles.cardContainer}>
          {projectData.jan > 0 ? (
            <DataCard month="Jan" dataValue={projectData.jan} />
          ) : (
            <DataCard month="Jan" dataValue="0" />
          )}
          {projectData.feb > 0 ? (
            <DataCard month="Feb" dataValue={projectData.feb} />
          ) : (
            <DataCard month="Feb" dataValue="0" />
          )}
          {projectData.mar > 0 ? (
            <DataCard month="Mar" dataValue={projectData.mar} />
          ) : (
            <DataCard month="Mar" dataValue="0" />
          )}
          {projectData.apr > 0 ? (
            <DataCard month="Apr" dataValue={projectData.apr} />
          ) : (
            <DataCard month="Apr" dataValue="0" />
          )}
          {projectData.may > 0 ? (
            <DataCard month="May" dataValue={projectData.may} />
          ) : (
            <DataCard month="May" dataValue="0" />
          )}
          {projectData.jun > 0 ? (
            <DataCard month="Jun" dataValue={projectData.jun} />
          ) : (
            <DataCard month="Jun" dataValue="0" />
          )}
          {projectData.jul > 0 ? (
            <DataCard month="Jul" dataValue={projectData.jul} />
          ) : (
            <DataCard month="Jul" dataValue="0" />
          )}
          {projectData.aug > 0 ? (
            <DataCard month="Aug" dataValue={projectData.aug} />
          ) : (
            <DataCard month="Aug" dataValue="0" />
          )}
          {projectData.sep > 0 ? (
            <DataCard month="Sep" dataValue={projectData.sep} />
          ) : (
            <DataCard month="Sep" dataValue="0" />
          )}
          {projectData.oct > 0 ? (
            <DataCard month="Oct" dataValue={projectData.oct} />
          ) : (
            <DataCard month="Oct" dataValue="0" />
          )}
          {projectData.nov > 0 ? (
            <DataCard month="Nov" dataValue={projectData.nov} />
          ) : (
            <DataCard month="Nov" dataValue="0" />
          )}
          {projectData.dec > 0 ? (
            <DataCard month="Dec" dataValue={projectData.dec} />
          ) : (
            <DataCard month="Dec" dataValue="0" />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  auth: state.auth
});

export default connect(mapStateToProps, { getProjectData })(Data);
