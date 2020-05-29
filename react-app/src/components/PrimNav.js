import React from "react";
import { Link } from "react-router-dom";

import "./styles/prim-nav.css";

const PrimaryNav = () => (
  <nav id="primary-nav">
    <div className="nav-header">
      <Link className="nav-title" to="/">
        Site Title Here
      </Link>
    </div>
  </nav>
);

export default PrimaryNav;
