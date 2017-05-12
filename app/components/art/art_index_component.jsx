import React from 'react';
import { Link } from 'react-router-dom';

import Filters from '../widgets/filters_component';
import ArtShow from './art_show_component';
import PORTFOLIO from 'Config/images_index';

const ArtIndex = () => {
  const gallery = PORTFOLIO.map((image) =>
    <div key={image.title}>
      <Link to={`/art/${image.slug}`}>
        <img
          className='index-frame'
          src={image.blurredIndex}
          alt={image.indexAltText} />
      </Link>
    </div>
  );

  return (
    <div className='art'>
      <div className='gallery'>
        {gallery}
      </div>
    </div>
  );
};

export default ArtIndex;
