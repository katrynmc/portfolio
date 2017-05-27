import React from 'react';
import { Link } from 'react-router-dom';

import Filters from 'Components/widgets/filters_component';
import ArtShow from 'Components/art/art_show_component';
import Image from 'Components/art/index_image_component';
import PORTFOLIO from 'Config/images_index';

const ArtIndex = () => {
  const gallery = PORTFOLIO.map((image) =>
    <div key={image.title}>
      <Image image={image} />
    </div>
  );

  return (
    <div className='art-index'>
      <div className='gallery'>
        {gallery}
      </div>
    </div>
  );
};

export default ArtIndex;

