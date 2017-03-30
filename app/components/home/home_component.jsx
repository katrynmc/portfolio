import React from 'react';
import TransitionGroup from 'react-addons-transition-group';

const Home = () => {
  return (
    <div className='home'>
      <div className='bio'>
        <div className='profession art'>ARTIST! </div>
        <div className='profession engineer'>ENGINEER!</div>
        <p>Initially trained in fine art, Katryn graduated from the Rhode Island School of Design in 2007 with a BFA in Painting. Upon discovering a passion for programming she pursued a career in technology. She currently works for <span className='company'>Upserve</span> in Providence, RI and is a member of the artist collective <span className='company'>the Wurks</span>.</p>
      </div>
    </div>
  );
}

export default Home;
