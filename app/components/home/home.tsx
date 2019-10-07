import React from "react";

import linePainting from "assets/images/knitpaint.png";

import "assets/styles/home/home";

function Home(): React.ReactElement {
  return (
    <div className="home">
      <h2 className="name">KATRYN McINTOSH</h2>
      <div className="painting-left">
        <img alt="" src={linePainting} />
      </div>
      <div className="painting-right">
        <img alt="" src={linePainting} />
      </div>

      <div className="full-width focus-panel">
        <div className="motivation">
          <h1 className="focus-heading">Art & Engineering</h1>
          I&apos;m passionate about building inspiring (and maintainable!) interfaces
          and experiences with great people. I value engagement with inclusive
          teams and believe that both art and technology have the potential to
          enrich peoples lives.
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
        <ul className="social-links">
          <li>
            <a href="https://github.com/katrynmc">Github</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/katrynmcintosh">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/katrynmcintosh">Twitter</a>
          </li>
          <li>
            <a href="https://instagram.com/katrynmcintosh">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
