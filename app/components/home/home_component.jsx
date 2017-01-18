import React from 'react';
import TransitionGroup from 'react-addons-transition-group';
import Repeat from 'react-icons/lib/md/repeat';
const face = require('../../assets/images/myface.png');

const Home = () => {
  return (
    <div className='home'>
      <div className='container-left'>
        <div className='main-card'>
          <div className='profession art'>Artist <Repeat /></div>
          <div className='profession engineer'>Engineer</div>
        </div>

        <div className='background-triangle left' />
      </div>
      <div className='container-right'>
        <div className='bio'>
          katryn is an artist and ux engineer based in providence, rhode island. initially trained in fine art she graduated from the rhode island school of design in 2007 with a bfa in painting. on discovering a passion for programming she pursued a career in technology. she currently works for Upserve as a ux engineer. she is a member of the artist collective the Wurks.
        </div>
        <div className='background-triangle' />
      </div>
    </div>
  );
}

export default Home;


// <div className='faces'>
//           <img
//             className='face one'
//             src={face}
//             alt='selfie bomb :: warhol style'/>
//           <img
//             className='face two'
//             src={face}
//             alt='selfie bomb :: warhol style'/>
//           <img
//             className='face three'
//             src={face}
//             alt='selfie bomb :: warhol style'/>
//         </div>
