import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

import { ROUTES } from "helpers/routes";

import Home from "components/home/home";
import Footer from "components/widgets/footer";
import EngineeringSection from "components/engineering/engineering_section.tsx";
import Header from "components/widgets/header";

import linePainting from "assets/images/knitpaint.png";

function App(): React.ReactElement {
  return (
    <div className="portfolio-site">
      <Router>
        <Header />
        <nav className="navigation">
          <NavLink to={ROUTES.engineering}  activeClassName="selected">
            Engineering
          </NavLink>
        </nav>
        <div className="painting-left">
          <img alt="" src={linePainting} />
        </div>
        <div className="painting-right">
          <img alt="" src={linePainting} />
        </div>
        <main>
          <Switch>
            <Route path={ROUTES.engineering}>
              <EngineeringSection />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default hot(module)(App);
