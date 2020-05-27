import React, { useEffect, useState } from "react";

import LandingCard from "../components/LandingCard";
import BaseLayout from "../layouts/BaseLayout";

const Landing = () => {
  const [landingArticles, setArticles] = useState([]);
  const [isLoading, setLoadingState] = useState(false);
  useEffect(() => {
    setLoadingState(true);
    const asyncFetch = async () => {
      try {
        // TODO Add placeholder block while it loads
        const api = "http://localhost:8000/wp-json/wp/v2/posts?per_page=5";
        const res = await fetch(api)
          .then((res) => res.json())
          .catch((err) => {
            throw new Error(err);
          });
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
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingState(false);
      }
    };
    asyncFetch();
  }, []);

  const MappedArticles =
    landingArticles.length > 0 ? (
      landingArticles.map((article) => <LandingCard article={article} />)
    ) : (
      <>
        <LandingCard isPlaceholder />
        <LandingCard isPlaceholder />
        <LandingCard isPlaceholder />
        <LandingCard isPlaceholder />
        <LandingCard isPlaceholder />
      </>
    );
  return (
    <BaseLayout>
      <article className="layout--content">
        <div className="ctr-landing-content">
          <section className="blogs-list">{MappedArticles}</section>
        </div>
      </article>
    </BaseLayout>
  );
};

export default Landing;
