import React from "react";
// TODO Figure out how routing will work for individual blog posts
// import { Link } from "react-router-dom";
import "./styles/landing-card.css";

const LandingCard = ({ article }) => {
  return (
    // The actual content will need a dangerouslySetInnerHTML
    <section className="card--landing">
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
          <button className="btn--read-more" type="button">
            Continue Reading
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingCard;
