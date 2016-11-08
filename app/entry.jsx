import React from 'react';
import ReactDOM from 'react-dom';
import TransitionGroup from 'react-addons-transition-group';

import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router';

import '../style';

import SocialBar from './components/social_bar_component';
import NavBar from './components/nav_bar_component';
import ArtSection from './components/art_section_component';
import EngineeringSection from './components/engineering_section_component';

import StyleGuide from './components/style_guide_component.jsx';
import Home from './components/home_component';

const brainMoth = require('./assets/images/brainmoth.png');
const sketchBook = require('./assets/images/sketch1.jpg');

const App = React.createClass({
  render() {
    return (
      <div className='portfolio-site'>
        <div className='header'>
          <NavBar />
        </div>
        <main>
          <div className='interface'>
            {this.props.children}
          </div>
          <SocialBar />
        </main>
        <Link to='/style'>Style</Link>
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="art" component={ArtSection} />
      <Route path="engineering" component={EngineeringSection} />
      <Route path="style" component={StyleGuide} />
    </Route>
  </Router>
), document.getElementById('app'));
