import React from 'react';
import {
  Link,
  NavLink,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from '../home/home_component';
import EngineeringSection from '../engineering/engineering_section_component';
import ArtSection from '../art/art_index_component';

const Header = () => (
  <Router>
    <div>
      <div className='header'>
        <div className='name'><Link to="/">KATRYN MCINTOSH</Link></div>
        <ul className='nav-items'>
          <li className='section'><NavLink activeClassName='selected' to='/art'>ART</NavLink></li>
          <li className='section'>ENGINEERING</li>
        </ul>
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/art' component={ArtSection} />
      <Route path='/engineering' component={EngineeringSection} />
    </div>
  </Router>
);

export default Header;
