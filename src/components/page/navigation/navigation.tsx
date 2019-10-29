import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES } from "helpers/routes";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to={ROUTES.projects} activeClassName="selected">
        Projects
      </NavLink>
      <NavLink to={ROUTES.background} activeClassName="selected">
        Background
      </NavLink>
    </nav>
  );
}

export default Navigation;
