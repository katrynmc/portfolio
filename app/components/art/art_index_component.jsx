import React from 'react';
import Filters from '../widgets/filters_component';

import PORTFOLIO from '../../config/images_index';

const ArtSection = () => {
  const gallery = PORTFOLIO.map((image) =>
    <img
      className='index-frame'
      key={image.title}
      src={image.blurredIndex}
      alt={image.indexAltText} />
  );

  return (
    <div className='art'>
      <div className='gallery'>
        {gallery}
      </div>
    </div>
  );
};

export default ArtSection;
