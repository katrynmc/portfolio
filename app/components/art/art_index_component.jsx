import React from 'react';
import Filters from '../widgets/filters_component';

const lolita = require('../../assets/images/portfolio_index/lolita.png');
const eyes = require('../../assets/images/portfolio_index/eyes.png');
const knitParade = require('../../assets/images/portfolio_index/knit_parade.png');
const fatman = require('../../assets/images/portfolio_index/fatguy.png');
const knitgrid = require('../../assets/images/portfolio_index/knitgrid.png');
const circuits = require('../../assets/images/portfolio_index/circuits.png');
const cats = require('../../assets/images/portfolio_index/cats.png');
const landscape = require('../../assets/images/portfolio_index/landscape.png');
const knitpaint = require('../../assets/images/portfolio_index/knitpaint.png');

const drawer1 = require('../../assets/images/portfolio_index/drawer1.png');
const screenprint = require('../../assets/images/portfolio_index/screenprint.png');
const brainmoth = require('../../assets/images/portfolio_index/brainmoth_focus.png');

const stones = require('../../assets/images/portfolio_index/stones.png');
const skull = require('../../assets/images/portfolio_index/skull.png');
const parade = require('../../assets/images/portfolio_index/parade.png');
const huppah = require('../../assets/images/portfolio_index/huppah.png');
const sketch = require('../../assets/images/portfolio_index/sketch.png');

const ArtSection = () => {
  return (
    <div className='art'>
      <div className='selected-panel'>


        <div className='gallery'>
          <img
            className='effect7'
            src={stones}
            sizes='100vw'
            alt='Collection: Rome - Guoache Painting' />

          <img
            className='effect7'
            src={drawer1}
            sizes='100vw'
            alt='Collection: Rome - Guoache Painting' />

          <img
            className='effect7'
            src={screenprint}
            sizes='100vw'
            alt='Forest fantasy - Screenprint' />

          <img
            className='effect7'
            src={huppah}
            sizes='100vw'
            alt='Huppah for a friend - Machine Knit' />

          <img
            className='effect7'
            src={lolita}
            sizes='100vw'
            alt='Lolita - Oil Painting' />

          <img
            className='effect7'
            src={fatman}
            sizes='100vw'
            alt='Fat man - Machine Knit' />

          <img
            className='effect7'
            src={circuits}
            sizes='100vw'
            alt='Circuits - Machine Knit' />

          <img
            className='effect7'
            src={cats}
            sizes='100vw'
            alt='Cats - Machine Knit' />

          <img
            className='effect7'
            src={landscape}
            sizes='100vw'
            alt='Landscape - Machine Knit' />

          <img
            className='effect7'
            src={knitgrid}
            sizes='100vw'
            alt='Aerial View Garden - Machine Knit' />

          <img
            className='effect7'
            src={knitpaint}
            sizes='100vw'
            alt='Rule Paintings - Oil Painting' />

          <img
            className='effect7'
            src={brainmoth}
            sizes='100vw'
            alt='Rorshach - Vector Repeat' />

          <img
            className='effect7'
            src={eyes}
            sizes='100vw'
            alt='Eyes - Vector Repeat' />

          <img
            className='effect7'
            src={parade}
            sizes='100vw'
            alt='Parade - Vector Repeat' />

          <img
            className='effect7'
            src={knitParade}
            sizes='100vw'
            alt='Knit Parade - U4ia Repeat' />

          <img
            className='effect7'
            src={sketch}
            sizes='100vw'
            alt='Sketchbook Page - Mixed Media Collage' />

          <img
            className='effect7'
            src={skull}
            sizes='100vw'
            alt='Day of the dead installation - Balloon mosaic' />

        </div>
      </div>

    </div>
  );
};

export default ArtSection;
