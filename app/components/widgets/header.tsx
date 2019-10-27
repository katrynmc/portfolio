import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "helpers/routes";

function Header(): React.ReactElement {
  return (
    <header>
      <h2 className="name">
        <Link to={ROUTES.home}>KATRYN McINTOSH</Link>
      </h2>
    </header>
  );
}

export default Header;
