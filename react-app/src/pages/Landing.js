import React from "react";

import DumbCard from "../components/DumbCard";
import BaseLayout from "../layouts/BaseLayout";
import AboutCard from "../components/AboutCard";

const Landing = () => {
  return (
    <BaseLayout>
      <article className="landing">
        <div className="ctr-landing-content">
          <section className="intro">
            <div className="ctr-intro">
              <div className="intro-content">
                <h1>Hello I'm an intro</h1>
                <p>
                  Praesent nunc massa, suscipit vel ipsum id, venenatis
                  malesuada quam. Proin faucibus malesuada leo in maximus.
                  Maecenas ullamcorper ornare urna non porttitor. Nulla
                  facilisi. Nullam hendrerit nisl non porttitor euismod.
                </p>
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
