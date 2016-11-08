import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import Kaleidoscope from './kaleidoscope_component';


const Home = () => {
  return (
    <div>

      <TransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <div key='foo' className='short-bio'>
          Katryn is an artist & UX engineer living in Providence, RI.
        </div>

        <div key='bar' className='cta'>Contact me</div>

      </TransitionGroup>

    </div>
  );
}

export default Home;

