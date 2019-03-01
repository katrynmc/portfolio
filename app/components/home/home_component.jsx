import React from "react";

import "Styles/home/home.css";

function Home() {
  return (
    <div class="home">
      <div class="name">
        Katryn McIntosh<span class="comment">// Art & Engineering</span>
      </div>
      <div class="home-row">
        <div class="statement-panel">
          <div class="heading">As an Engineer</div>
          <div class="bio">
            I'm passionate about building inspiring interfaces and experiences
            with great people.
          </div>
          <div class="bio">I value engagement with inclusive communities.</div>
          <div class="bio">
            I believe that technology has the potential to enrich peoples lives.
          </div>
          <div class="heading">As an Artist</div>
          <div class="bio">
            I'm compelled by immersive experiences that challenge our vision of
            reality.
          </div>
          <div class="bio">
            I take comfort in systems like those found in textiles, procedurally
            generated art, THE GRID&trade;, and of course technology.
          </div>
          <div class="bio">
            I believe that art has the potential to enrich peoples lives.
          </div>
        </div>
        <div class="statement-panel">
          <div class="heading">My Background</div>
          <div class="bio">
            I graduated from the Rhode Island School of Design [ RISD ] with a
            BFA in Painting.
          </div>
          <div class="bio">
            I worked in fashion for several years and maintain a deep
            appreciation for colors, fabrics, and trims.
          </div>
          <div class="bio">
            I work for Upserve as a Senior UI Engineer in Providence, RI and
            belong to the artist collective the Wurks.
          </div>
          <div class="heading">Find me</div>
          <div class="bio">
            <a href="https://github.com/katrynmc">Github</a>
          </div>
          <div class="bio">
            <a href="https://twitter.com/katrynmcintosh">Twitter</a>
          </div>
          <div class="bio">
            <a href="https://instagram.com/katrynmcintosh">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
