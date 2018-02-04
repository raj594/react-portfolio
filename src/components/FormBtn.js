import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "none", marginBottom: 50 }} className="btn btn-neutral">
    {props.children}
  </button>;
