import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import '../style';

import App from './components/app_component';

import Home from './components/home/home_component';
import EngineeringSection from './components/engineering/engineering_section_component';
import ArtSection from './components/art/art_index_component';

const appDiv = document.createElement('div');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="art" component={ArtSection} />
      <Route path="engineering" component={EngineeringSection} />
    </Route>
  </Router>
), document.body.appendChild(appDiv));
