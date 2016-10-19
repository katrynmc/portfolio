import React from 'react';
import TransitionGroup from 'react-addons-transition-group';

const Home = () => {
  return (
    <TransitionGroup>
      <div className='short-bio'>
        Katryn is an artist & UX engineer living in Providence, RI.
      </div>
      <div className='cta'>Contact me</div>
    </TransitionGroup>
  );
}

export default Home;

