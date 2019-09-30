import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "Components/home/home_component";
import SocialBar from "./widgets/social_bar_component";
import Footer from "./widgets/footer_component";

function App() {
  return (
    <div id="app" className="portfolio-site">
      <main>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
        <SocialBar />
      </main>
      <Footer />
    </div>
  );
}

export default hot(module)(App);
