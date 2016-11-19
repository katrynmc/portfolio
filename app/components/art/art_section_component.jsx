import React from 'react';
import Filters from '../widgets/filters_component';

const skull = require('../../assets/images/skull.jpg');

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
