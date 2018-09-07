import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <Banner title="Oops. 404." />
      </Fragment>
    );
  }
}

export default NotFound;
