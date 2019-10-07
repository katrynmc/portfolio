import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import "Styles/home/home.css";

import ArtShow from "components/art/art_show";
import Home from "components/home/home";
import EngineeringSection from "components/engineering/engineering_section";
import ArtSection from "components/art/art_index";

const Header = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/art" component={ArtSection} />
    <Route path={"/art/:image"} component={ArtShow} />
    <Route exact path="/engineering" component={EngineeringSection} />
  </Router>
);

export default Header;
