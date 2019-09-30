import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "Components/home/home";
import Footer from "./widgets/footer";

function App() {
  return (
    <div id="app" className="portfolio-site">
      <main>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default hot(module)(App);
