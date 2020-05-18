import React from "react";

import DumbCard from "../components/DumbCard";
import BaseLayout from "../layouts/BaseLayout";
import AboutCard from "../components/AboutCard";
import DumbCardHl from "../components/DumbCard-HL";

const Landing = () => {
  return (
    <BaseLayout>
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
    </BaseLayout>
  );
};

export default Landing;
