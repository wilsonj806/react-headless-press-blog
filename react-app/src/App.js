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
        <div className="ctr-landing-content">
          <section className="intro">
            <div className="ctr-intro">
              <div className="wrap-highlight-cards">
                <DumbCardHl />
                <DumbCardHl />
              </div>
              <AboutCard />
            </div>
          </section>
          <section className="blogs-list">
            <DumbCard />
            <DumbCard />
            <DumbCard />
          </section>
        </div>
      </article>
    </>
  );
}

export default App;
