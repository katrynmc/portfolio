import React from "react";
import { hot } from "react-hot-loader";

import SocialBar from "./widgets/social_bar_component";
import Header from "./widgets/header_component";
import Footer from "./widgets/footer_component";

function App() {
  return (
    <div id="app" className="portfolio-site">
      <main>
        <Header />
        <SocialBar />
      </main>
      <Footer />
    </div>
  );
}

export default hot(module)(App);
