import React from "react";
import PrimaryNav from "../components/PrimNav";
import SideNav from "../components/SideNav";

const BaseLayout = ({ children }) => {
  return (
    <div className="ctr-base-layout">
      <PrimaryNav />
      {children}
      <SideNav />
    </div>
  );
};

export default BaseLayout;
