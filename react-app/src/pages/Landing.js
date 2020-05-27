import React from "react";
import { Redirect } from "react-router-dom";

import LandingCard from "../components/LandingCard";
import BaseLayout from "../layouts/BaseLayout";

import useLandingFetch from "../react-hooks/useLandingFetch";
import debounce from "../utils/debounce";

const Landing = () => {
  const { err, articles, isLoading } = useLandingFetch();

  // If there's an error, redirect to 500 page, else if articles, map articles, else return placeholders
  // TODO update this so that the placeholders only occur during loading
  const MappedArticles = err ? (
    <Redirect to="/500" />
  ) : articles.length > 0 && !isLoading ? (
    articles.map((article) => (
      <LandingCard article={article} key={article.id} />
    ))
  ) : (
    <>
      <LandingCard isPlaceholder key={0} />
      <LandingCard isPlaceholder key={1} />
      <LandingCard isPlaceholder key={2} />
      <LandingCard isPlaceholder key={3} />
      <LandingCard isPlaceholder key={4} />
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
