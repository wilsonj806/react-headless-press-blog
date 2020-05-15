import React from "react";
import "./styles/nav.css";

const PrimaryNav = () => (
  <nav id="primary-nav">
    <div className="nav-header">
      <h1>Site Title Here</h1>
    </div>
    <div>
      <ul className="nav-list">
        <li>About</li>
        <li>Media</li>
        <li>Articles</li>
      </ul>
    </div>
  </nav>
);

export default PrimaryNav;
