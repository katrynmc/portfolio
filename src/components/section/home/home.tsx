import React from "react";

import styles from "./home-styles.css";

function Home(): React.ReactElement {
  return (
    <>
      <div className={styles.motivation}>
        <h1 className="focus-heading">Art & Engineering</h1>

        <p className="summary">
          I&apos;m passionate about building inspiring (and maintainable!)
          interfaces and experiences with great people. I value engagement with
          inclusive teams and believe that both art and technology have the
          potential to enrich peoples lives.
        </p>
        <div className="venn">
          <div className="circle-a">&nbsp;</div>
          <div className="circle-b">&nbsp;</div>
        </div>
        <div className="venn spin-faster">
          <div className="circle-c">&nbsp;</div>
        </div>
      </div>
    </>
  );
}

export default Home;
