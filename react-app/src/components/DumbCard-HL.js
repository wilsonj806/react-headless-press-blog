import React from "react";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexFlow: "column nowrap",
  height: "190px",
  maxWidth: "10rem",
  margin: "0 8px",
};

const headStyle = {
  width: "8rem",
  height: "2.2rem",
  fontSize: "1rem",
  textAlign: "center",
};

const DumbCardHighlights = () => (
  <section style={style}>
    <div style={{ width: "150px", height: "150px", background: "grey" }} />
    <h2 style={headStyle}>My Highlighted Article</h2>
  </section>
);

export default DumbCardHighlights;
