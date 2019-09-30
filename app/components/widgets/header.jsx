import React from "react";
import {
  Link,
  NavLink,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import "Styles/home/home.css";

import ArtShow from "Components/art/art_show_component";
import Home from "Components/home/home_component";
import EngineeringSection from "Components/engineering/engineering_section_component";
import ArtSection from "Components/art/art_index_component";

const Header = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/art" component={ArtSection} />
    <Route path={"/art/:image"} component={ArtShow} />
    <Route exact path="/engineering" component={EngineeringSection} />
  </Router>
);

export default Header;
