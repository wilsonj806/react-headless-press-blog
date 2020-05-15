import React from "react";

const style = {
  width: "12rem",
  height: "auto",
  background: "grey",
  // TODO make this a media query and bump it so that the About Card
  // ...is the first thing mobile users see
  marginRight: "24px",
};

const AboutCard = () => (
  <section style={style}>
    <h1>About Me</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut dolor
      sollicitudin, rhoncus dui a, feugiat purus. Suspendisse bibendum felis
      ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    </p>
  </section>
);

export default AboutCard;
