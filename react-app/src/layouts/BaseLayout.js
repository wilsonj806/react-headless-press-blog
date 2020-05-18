import React from "react";
import PrimaryNav from "../components/PrimNav";

const BaseLayout = ({ children }) => {
  return (
    <>
      <PrimaryNav />
      {children}
    </>
  );
};

export default BaseLayout;
