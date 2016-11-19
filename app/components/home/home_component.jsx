import React from 'react';
import TransitionGroup from 'react-addons-transition-group';

const eyes = require('../../assets/images/newcolor.png');
const sketchBook = require('../../assets/images/sketch1.jpg');

const Home = () => {
  return (
    <div className='home'>
      <div className='background-images'>
        <img
          className='home-eyes'
          src={eyes}
          srcSet={`${eyes} 1280w`}
          sizes='100vw'
          alt='Eyes'/>
        <img
          className='home-sketch'
          src={sketchBook}
          srcSet={`${sketchBook} 1280w`}
          sizes='100vw'
          alt='Sketch'/>
      </div>

      <TransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <div className='short-bio'>
          Katryn is an artist & UX engineer living in Providence, RI.
        </div>
        <div key='bar' className='cta'>
          <a href='mailto:katryn.mcintosh@gmail.com'> Contact me</a>
        </div>
      </TransitionGroup>
    </div>
  );
}

export default Home;
