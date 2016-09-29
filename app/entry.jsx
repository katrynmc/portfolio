import React from 'react';
import ReactDOM from 'react-dom';
import TransitionGroup from 'react-addons-transition-group';

import '../style';

import SocialBar from './components/social_bar_component';
import NavBar from './components/nav_bar_component';


const brainMoth = require('./assets/images/brainmoth.png');

const App = () => {

  return (
    <div className='portfolio-site'>
      <div className='header'>
        <NavBar />
      </div>
      <main>
        <TransitionGroup>
          <div className='short-bio' >
            Katryn is an artist & UX engineer living in Providence, RI.
          </div>
        </TransitionGroup>
        <div className='right'>
          <img
            className='portfolio-img'
            src={brainMoth}
            srcSet={`${brainMoth} 1280w`}
            sizes='100vw'
            alt='Ink blot pattern that kinda looks like brains'/>
        </div>

        <SocialBar />
      </main>
      <footer>
      </footer>
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('app'));
