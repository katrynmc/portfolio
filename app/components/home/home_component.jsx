import React from 'react';
import TransitionGroup from 'react-addons-transition-group';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <div className='left-half'>Artist</div>
        <div className='short-bio'><a href='http://thewurks.com'>@ the Wurks</a></div>
      </div>
      <div className='container pull-right'>
        <div className='right-half'>Engineer</div>
        <div className='pull-right'>
          <div className='short-bio'><a href='http://upserve.com'>@ Upserve</a></div>
        </div>
      </div>
      <div className='footer'>
        <div className='city'>Based in Providence, RI</div>
          <a className='email' href='mailto:katryn.mcintosh@gmail.com'>Contact me</a>
      </div>
    </div>
  );
}

export default Home;
