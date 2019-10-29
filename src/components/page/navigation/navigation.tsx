import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES } from "helpers/routes";

import styles from "./navigation-styles.css";

function Navigation() {
  return (
    <nav className={styles.navigation}>
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
