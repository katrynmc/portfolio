import React from 'react';
import ReactDOM from 'react-dom';

import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';

import '../style';

import SocialBar from './components/widgets/social_bar_component';
import NavBar from './components/widgets/nav_bar_component';
import Footer from './components/widgets/footer_component';

import EngineeringSection from './components/engineering/engineering_section_component';
import AboutSection from './components/about/about_section_component';

import StyleGuide from './components/style_guide_component.jsx';
import Home from './components/home/home_component';

const App = React.createClass({
  render() {
    return (
      <div className='portfolio-site'>
        <NavBar />
        <main>
          <div className='interface'>
            {this.props.children}
          </div>
          <SocialBar />
        </main>
        <Footer />
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={AboutSection} />
      <Route path="engineering" component={EngineeringSection} />
      <Route path="style" component={StyleGuide} />
    </Route>
  </Router>
), document.getElementById('app'));
