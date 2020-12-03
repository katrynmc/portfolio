import React from "react";

import {
  motivation,
  focusHeading,
  summary,
  venn,
  circleA,
  circleB,
} from "./home-styles.css";

function Home(): React.ReactElement {
  return (
    <>
      <div className={motivation}>
        <h1 className={focusHeading}>Art & Engineering</h1>
        <p className={summary}>
          I&apos;m passionate about building inspiring (and maintainable!)
          interfaces and experiences with great people. I value engagement with
          inclusive teams and believe that both art and technology have the
          potential to enrich peoples lives.
        </p>
        <div className={venn}>
          <div className={circleA}>&nbsp;</div>
          <div className={circleB}>&nbsp;</div>
        </div>
      </div>
    </>
  );
}

export default Home;
