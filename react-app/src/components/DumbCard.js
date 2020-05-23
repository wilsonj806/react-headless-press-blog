import React from "react";
import "./styles/landing-card.css";

const DumbCard = () => (
  <section className="card--landing">
    <header className="card-header" />
    <div className="card-body">
      <h3>Article Name</h3>
      <p className="content--meta">
        <span className="label--meta">Date added:</span>
        9999999
      </p>
      <p className="content--meta">
        <span className="label--meta">Estimated Read Time:</span>
        9999999
      </p>
      <p>
        Suspendisse auctor, lorem iaculis ornare sagittis, turpis sem cursus
        nisl, a mollis velit quam at massa. Proin sit amet felis feugiat,
        dapibus sem eu, tincidunt ante. Nullam eu nibh vel felis molestie
        vehicula. Praesent nunc massa, suscipit vel ipsum id, venenatis
        malesuada quam. Proin faucibus malesuada leo in maximus. Maecenas
        ullamcorper ornare urna non porttitor. Nulla facilisi. Nullam hendrerit
        nisl non porttitor euismod. Nunc purus tellus, tempor eget lorem vel,
        mattis mollis mauris. Nunc nulla libero, vehicula at ullamcorper at,
        placerat in leo. Sed sollicitudin facilisis nisi, et efficitur turpis
        accumsan sit amet.
      </p>
      <div className="card-expand">
        <button className="btn--read-more">Read More</button>
      </div>
    </div>
  </section>
);

export default DumbCard;
