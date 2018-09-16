import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";
import ManageClients from "./manageClients";

class Admin extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Banner title="Administrator Panel" />

        <ManageClients />
      </Fragment>
    );
  }
}

export default Admin;
