import React from 'react';
import Filters from './filters_component';
import Kaleidoscope from './kaleidoscope_component';

const skull = require('../assets/images/skull.jpg');
const skullThumb = require('../assets/images/skull-sliver-bw.jpg');

const stonesThumb = require('../assets/images/stones-sliver-bw.jpg');
const knitGridThumb = require('../assets/images/knitgrid-sliver-bw.png');
const drawer = require('../assets/images/drawer1.jpg');

const ArtSection = () => {
  return (
    <div className='art'>
      <div className='selected-panel'>
        <img
          className='portfolio-large effect7'
          src={skull}
          srcSet={`${skull} 1280w`}
          sizes='100vw'
          alt='Day of the dead installation - ballon mosaic'/>
        <Filters />
        <div className='details-panel'>
          <h6>INSTALLATION</h6>
          <h3>Day of the Dead, 2015</h3>
          <p className='description'>Mosaic of colored balloons. Attendees were invited to destroy the piece with darts over the course of the night.</p>
        </div>
      </div>
    </div>
  );
};

export default ArtSection;

// <img
//             className='portfolio-large'
//             src={skull}
//             srcSet={`${skull} 1280w`}
//             sizes='100vw'
//             alt='Day of the dead installation - ballon mosaic'/>

// <div className='portfolio-item'>
// <img
//   className='sliver'
//   src={stonesThumb}
//   srcSet={`${stonesThumb} 1280w`}
//   sizes='100vw'
//   alt='Still life of collected stones'/>
// </div>
// <div className='portfolio-item'>
// <img
//   className='sliver'
//   src={knitGridThumb}
//   srcSet={`${knitGridThumb} 1280w`}
//   sizes='100vw'
//   alt='Machine knit'/>
// </div>
// <div className='portfolio-item'>
// <img
//   className='sliver'
//   src={lolita}
//   srcSet={`${lolita} 1280w`}
//   sizes='100vw'
//   alt='Painting inspired by Lolita'/>
// </div>