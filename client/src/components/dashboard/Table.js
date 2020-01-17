import React, { Component, forwardRef } from "react";
import MaterialTable from "material-table";
import moment from "moment";
import { Link } from "react-router-dom";
import { deleteProject } from "../../actions/projectActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Check,
  Delete,
  Search,
  Clear,
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight
} from "@material-ui/icons";

const tableIcons = {
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />)
};

class Table extends Component {
  handleDelete = project => {
    const confirm = window.confirm(
      "Are you sure you want to delete this project? This action cannot be undone."
    );

    if (confirm) {
      this.props.deleteProject(project._id);
    }
  };

  render() {
    return (
      <div style={{ maxWidth: "100%", margin: 30 }}>
        <MaterialTable
          icons={tableIcons}
          style={{
            borderRadius: 10
          }}
          options={{
            pageSize: 5,
            headerStyle: {
              backgroundColor: "#eee",
              textTransform: "uppercase",
              fontSize: "0.7rem",
              color: "rgba(0,0,0,0.5)"
            }
          }}
          columns={[
            {
              title: "Title",
              field: "title",
              render: rowData => (
                // console.log(rowData)
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#fc7967"
                  }}
                  to={`/dashboard/update/${rowData.id}`}
                >
                  {rowData.title}
                </Link>
              )
            },
            { title: "Client", field: "client" },
            { title: "Author", field: "author" },
            {
              title: "Fee",
              field: "project_fee",
              type: "currency"
            },
            {
              title: "Deadline",
              field: "deadline",
              type: "date"
            },
            {
              title: "Status",
              field: "status",
              cellStyle: rowData => ({
                color: (function() {
                  if (rowData === "Queued") return "#ef5350";
                  if (rowData === "Pending") return "#FFA726";
                })()
              })
            },
            {
              title: "Payment Status",
              field: "payment_status",
              cellStyle: rowData => ({
                color: (function() {
                  if (rowData === "Pending") return "#ef5350";
                  if (rowData === "Invoiced") return "#FFA726";
                })()
              })
            },
            {
              title: "Actions",
              field: "actions"
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
                return moment(project.deadline).format("MM-DD-YY");
              }

              if (
                moment(project.deadline).isAfter(moment()) &&
                project.status === "delivered"
              ) {
                return moment(project.deadline).format("MM-DD-YY");
              }

              if (
                moment(project.deadline).isAfter(moment()) &&
                project.status !== "delivered"
              ) {
                return (
                  <div>
                    <div style={{ color: "#66BB6A" }}>
                      {moment(project.deadline)
                        .add(1, "day")
                        .fromNow()}
                    </div>

                    <div>
                      {" "}
                      <div
                        style={{
                          color: "rgba(0,0,0,0.4"
                        }}
                      >
                        {moment(project.deadline).format("(MM-DD-YY)")}
                      </div>
                    </div>
                  </div>
                );
              }
            })(),
            status: (function() {
              if (project.status === "queued") return "Queued";
              if (project.status === "pending") return "Pending";
              if (project.status === "delivered") return <Check />;
            })(),
            payment_status: (function() {
              if (project.payment_status === "pending") return "Pending";
              if (project.payment_status === "invoiced") return "Invoiced";
              if (project.payment_status === "paid") return <Check />;
            })(),
            actions: (
              <Delete
                onClick={() => this.handleDelete(project)}
                style={{ cursor: "pointer" }}
              />
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

export default connect(null, { deleteProject })(Table);
