import React from "react";
import TransitionGroup from "react-addons-transition-group";

const bunnyHelmet = require("../../assets/images/bunny_helmet.png");

const Home = () => {
  return (
    <div className="main-view bio">
      <div className="title">
        <div className="profession art">
          ARTIST<span className="darken">!</span>
        </div>
        <div className="profession engineer">
          ENGINEER<span className="darken">!</span>
        </div>
      </div>

      <div className="opening-summary">
        Initially trained in fine art, Katryn graduated from the Rhode Island
        School of Design in 2007 with a BFA in Painting. Upon discovering a
        passion for programming she pursued a career in technology. She
        currently works for <span className="company">Upserve</span> in
        Providence, RI and is a member of the artist collective{" "}
        <span className="company">the Wurks</span>.
      </div>
      <div className="heads">
        <img
          className="front-image"
          src={bunnyHelmet}
          alt="Digital drawing - helmet with two mounted bunny heads"
        />
        <img
          className="front-image"
          src={bunnyHelmet}
          alt="Digital drawing - helmet with two mounted bunny heads"
        />
        <img
          className="front-image"
          src={bunnyHelmet}
          alt="Digital drawing - helmet with two mounted bunny heads"
        />
        <img
          className="front-image"
          src={bunnyHelmet}
          alt="Digital drawing - helmet with two mounted bunny heads"
        />
        <img
          className="front-image"
          src={bunnyHelmet}
          alt="Digital drawing - helmet with two mounted bunny heads"
        />
        <img
          className="front-image"
          src={bunnyHelmet}
          alt="Digital drawing - helmet with two mounted bunny heads"
        />
      </div>
    </div>
  );
};

export default Home;
