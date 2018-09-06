import React, { Component, Fragment } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import WeDo from "../components/WeDo";
import Tools from "../components/Tools";

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <WeDo />
        <Products />
        <Tools />
      </Fragment>
    );
  }
}

export default Landing;
