import React from "react";

import betting from "assets/images/projects/alita.png";

const EngineeringSection = (): React.ReactElement => {
  return (
    <>
      <h1 className="section-heading">Engineering</h1>
      <section>
        <div className="project-body">
          <div>
            <h2 className="project-heading">Alita: Passport to Iron City</h2>
            <div className="detail">
              <h3 className="project-sub-section">TECH</h3>
              <p>Electron | React | Redux | CSS Modules</p>
            </div>
            <div className="detail">
              <h3 className="project-sub-section">CONCEPT</h3>
              <p>Alita: Passport to Iron City is a team-based immersive experience that physically transports visitors into the futuristic world of James Cameron, Robert Rodriguez and Jon Landau's highly anticipated film Alita: Battle Angel.</p>
            </div>
          </div>
          <img className="project-image" alt="" src={betting} />
        </div>
      </section>
    </>
  );
};

export default EngineeringSection;
