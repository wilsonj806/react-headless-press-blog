import React from "react";
import PrimaryNav from "../components/PrimNav";

const BaseLayout = ({ children }) => {
  return (
    <div className="ctr-base-layout">
      <PrimaryNav />
      {children}
      <div style={{ width: "100px" }}>
        <h1>About</h1>
        <p>Search shit</p>
      </div>
    </div>
  );
};

export default BaseLayout;
