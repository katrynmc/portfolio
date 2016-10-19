import React from 'react';
import ReactDOM from 'react-dom';
import TransitionGroup from 'react-addons-transition-group';

import '../style';

import SocialBar from './components/social_bar_component';
import NavBar from './components/nav_bar_component';
import ArtSection from './components/art_section_component';

const brainMoth = require('./assets/images/brainmoth.png');
const sketchBook = require('./assets/images/sketch1.jpg');

const App = () => {

  return (
    <div className='portfolio-site'>

      <div className='header'>
        <NavBar />
      </div>
      <main>
        <div className='interface'>
          <TransitionGroup>
            <div className='short-bio'>
              Katryn is an artist & UX engineer living in Providence, RI.
            </div>
            <div className='cta'>Contact me</div>
          </TransitionGroup>

        </div>

        <ArtSection />
        <SocialBar />
      </main>
      <footer>
      </footer>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('app'));
