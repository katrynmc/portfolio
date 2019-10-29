import React from "react";

import styles from "../section-styles.css";

import betting from "assets/images/projects/alita.png";

function EngineeringSection(): React.ReactElement {
  return (
    <>
      <h1 className={styles.sectionHeading}>Engineering</h1>
      <section>
        <div className={styles.projectBody}>
          <div>
            <h2 className={styles.projectHeading}>
              Alita: Passport to Iron City
            </h2>
            <div className={styles.detail}>
              <h3 className={styles.projectSubSection}>TECH</h3>
              <p>Electron | React | Redux | CSS Modules</p>
            </div>
            <div className={styles.detail}>
              <h3 className={styles.projectSubSection}>CONCEPT</h3>
              <p>
                Alita: Passport to Iron City is a team-based immersive
                experience that physically transports visitors into the
                futuristic world of James Cameron, Robert Rodriguez and Jon
                Landau's highly anticipated film Alita: Battle Angel.
              </p>
            </div>
          </div>
          <img className={styles.projectImage} alt="" src={betting} />
        </div>
      </section>
    </>
  );
}

export default EngineeringSection;
