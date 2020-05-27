import React from "react";

import { Link } from "react-router-dom";
import "./styles/landing-card.css";

const LandingCard = ({ article, isPlaceholder }) => {
  const ToRender = isPlaceholder ? (
    <>
      <div className="card-thumbnail--mock" />
      <div className="card-body">
        <div className="title--mock" />
        <div className="meta--mock" />
        <div className="meta--mock" />
        <div className="content--mock" />
      </div>
    </>
  ) : (
    // FIXME The Header element is semantically wrong
    <>
      <header className="card-header" />
      <div className="card-body">
        <h3>{article.title}</h3>
        <p className="content--meta">
          <span className="label--meta">Date added: </span>
          {article.date}
        </p>
        <p className="content--meta">
          <span className="label--meta">Estimated Read Time: </span>
          9999999
        </p>
        <div
          className="content--body"
          dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}
        ></div>
        <div className="card-expand">
          <Link className="btn--read-more" to={`/blog/${article.id}`}>
            Continue Reading
          </Link>
        </div>
      </div>
    </>
  );
  return (
    // The actual content will need a dangerouslySetInnerHTML
    <section className={`${isPlaceholder ? "landing--mock" : "card--landing"}`}>
      {ToRender}
    </section>
  );
};

export default LandingCard;
