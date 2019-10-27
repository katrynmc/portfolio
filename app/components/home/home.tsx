import React from "react";

function Home(): React.ReactElement {
  return (
    <>
      <div className="full-width">
        <div className="motivation">
          <h1 className="focus-heading">Art & Engineering</h1>
          I&apos;m passionate about building inspiring (and maintainable!)
          interfaces and experiences with great people. I value engagement with
          inclusive teams and believe that both art and technology have the
          potential to enrich peoples lives.
        </div>
      </div>
      <div className="full-width background-panel">
        <div className="background">
          <h3 className="heading">Background</h3>
          <div>
            I graduated from the Rhode Island School of Design (RISD) in 2007
            with a BFA in Painting. After exploring a variety of colorful
            industries that range from galleries to fashion, I fell in love with
            software engineering. My primary focus over the past 5 years has
            been UI engineering architecture and leadership.
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
