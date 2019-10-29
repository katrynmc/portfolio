import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "helpers/routes";
import styles from "./header-styles.css";

function Header(): React.ReactElement {
  return (
    <header className={styles.siteHeader}>
      <h2 className={styles.name}>
        <Link to={ROUTES.home}>KATRYN McINTOSH</Link>
      </h2>
    </header>
  );
}

export default Header;
