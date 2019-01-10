import React from "react";

import "Styles/home/home.css";

function Home() {
  return (
    <div className="bio">
      <div className="classification">
        <div className="profession">ART +</div>
        <div className="profession">ENGINEERING</div>
      </div>

      <div className="opening-summary">
        Initially trained in fine art, Katryn graduated from the Rhode Island
        School of Design in 2007 with a BFA in Painting. Upon discovering a
        passion for programming she pursued a career in technology. She
        currently works for <span className="company">Upserve</span> in
        Providence, RI and is a member of the artist collective{" "}
        <span className="company">the Wurks</span>.
      </div>
    </div>
  );
}

export default Home;
