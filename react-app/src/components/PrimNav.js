import React from "react";
import "./styles/prim-nav.css";

const PrimaryNav = () => (
  <nav id="primary-nav">
    <div className="nav-header">
      <h1>Site Title Here</h1>
    </div>
    <ul className="nav-list">
      <li className="nav-item">
        <span>About</span>
      </li>
      <li className="nav-item">
        <span>Media</span>
      </li>
      <li className="nav-item">
        <span>Articles</span>
      </li>
    </ul>
  </nav>
);

export default PrimaryNav;
