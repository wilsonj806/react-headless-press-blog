import React from "react";
import PrimNav from "./components/PrimNav";
import DumbCard from "./components/DumbCard";
import DumbCardHl from "./components/DumbCard-HL";
import AboutCard from "./components/AboutCard";

function App() {
  return (
    <>
      <PrimNav />
      <article className="landing">
        <section className="intro">
          <div className="wrap-highlight-cards">
            <DumbCardHl />
            <DumbCardHl />
          </div>
        </section>
        <AboutCard />
        <section>
          <DumbCard />
          <DumbCard />
          <DumbCard />
        </section>
      </article>
    </>
  );
}

export default App;
