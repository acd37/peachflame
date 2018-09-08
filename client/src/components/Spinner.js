import React, { Fragment } from "react";

const Spinner = props => (
  <Fragment>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20%"
      }}
    >
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </Fragment>
);

export default Spinner;
