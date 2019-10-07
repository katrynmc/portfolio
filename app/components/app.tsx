import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "components/home/home";
import Footer from "components/widgets/footer";

function App() {
  return (
    <div id="app" className="portfolio-site">
      <main>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default hot(module)(App);