import React, { useEffect, useState } from "react";

import LandingCard from "../components/LandingCard";
import BaseLayout from "../layouts/BaseLayout";

const Landing = () => {
  const [landingArticles, setArticles] = useState([]);
  useEffect(() => {
    const asyncFetch = async () => {
      // TODO add query strings to the thing (e.g '?title=doo&color=red')
      const api = "http://localhost:8000/wp-json/wp/v2/posts?per_page=5";
      const res = await fetch(api).then((res) => res.json());
      console.log(res);
      const articles = res.map(
        ({ date, excerpt, link, tags, title, author }) => {
          return {
            date,
            excerpt,
            link,
            tags,
            title: title.rendered,
          };
        }
      );
      setArticles(articles);
    };
    asyncFetch();
  }, []);

  const MappedArticles =
    landingArticles.length > 0
      ? landingArticles.map((article) => <LandingCard article={article} />)
      : null;
  return (
    <BaseLayout>
      <article className="landing">
        <div className="ctr-landing-content">
          {/* <section className="intro">
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
            </div>
          </section> */}
          <section className="blogs-list">{MappedArticles}</section>
        </div>
      </article>
    </BaseLayout>
  );
};

export default Landing;
